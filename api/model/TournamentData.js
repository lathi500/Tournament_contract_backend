const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    tournamentNumber: { type: Number },
    tournamentStartTime: { type: Number },
    tournamentDuration: {type: Number}
})

module.exports = mongoose.model('Tournaments', tournamentSchema);