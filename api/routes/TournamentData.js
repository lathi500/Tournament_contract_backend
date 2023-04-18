const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
require('dotenv').config();
const Tournaments = require('../model/TournamentData');
const Provider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');
const contractABI = require('../../contract_abi.json');
const contracAddress = "0x7Fa3C096F73A569e1097E8F40A11d3d8C7bA13FA";
const privatekey = process.env.privatekey;
const accounAddress = "0xa799c2b72e25dB4c8Ea8f9D9e7690fac859c5cee";
const rpc = process.env.rpc;

var provider = new Provider(privatekey, rpc);
var web3 = new Web3(provider);
var mycontract = new web3.eth.Contract(contractABI, contracAddress);

router.get('/getdata', async (req, res, next) => {

    const name = await mycontract.methods.name().call();
    const age = await mycontract.methods.age().call();
    console.log(name);
    console.log(age);

    if (name, age) {
        res.status(200).json({
            Name: name,
            Age: age
        })
    }
    else {
        res.status(500).json({
            message: "ERROR"
        });
    }

})

router.post('/adddata', async (req, res, next) => {

    let latest_block = await web3.eth.getBlockNumber();
    let historical_block = latest_block - 10000;

    mycontract.getPastEvents(
        "tournamentStarted",
        { fromBlock: historical_block, toBlock: latest_block },
        function (error, events) {
            const eventdatarray = [];

            for (var i = 0; i < events.length; i++) {
                const Result = events[i].returnValues;
                var singleRow = {
                    _id: new mongoose.Types.ObjectId,
                    tournamentNumber: Result.tournamentNumber,
                    tournamentStartTime: Result.tournamentStartTime,
                    tournamentDuration: Result.tournamentDuration
                };
                eventdatarray.push(singleRow);
            }

            Tournaments.insertMany(eventdatarray).then(() =>
                res.status(200).json({
                    TournamentData: eventdatarray
                })
            ).catch((err) => {
                res.status(500).json({
                    Error: err
                })
                console.log(err);
            })
        }
    )
})

module.exports = router;
