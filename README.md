# Tournament_contract_backend-
Backend API using node js. for mangaing created tournaments data.

Here I am storing all the created tournaments data in mongodb atlas databse. by listening emitted events when admin create a new tournament.

For runnig project do follow the steps:

```shell 
step 1: take project clone.
step 2: npm i.
step 3: nodemon server.js
```

When call Post api for posting event data you can get given data as responce.


![Screenshot from 2023-04-18 15-34-20](https://user-images.githubusercontent.com/70260207/232747559-c0bae4da-4379-4077-bbd0-565a3999a5d2.png)


Data in database.

![Screenshot from 2023-04-18 15-34-44](https://user-images.githubusercontent.com/70260207/232747603-ec2abd97-4af0-4442-8573-151524313458.png)

```shell 
Note: add given data in .env file:
1. Mongo Atlas Password.
2. any account private key
3. network rpc provider( Mumbai network )
```

Smart contract address: 0x7Fa3C096F73A569e1097E8F40A11d3d8C7bA13FA ( deployed on polygon mumbai network ).
