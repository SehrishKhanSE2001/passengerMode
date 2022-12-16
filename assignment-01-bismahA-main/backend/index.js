const express = require('express')
//import express from 'express'; 
//import bodyParser from 'body-parser';
const bodyParser = require('body-parser')
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const app = express();
const userInfoRoute=require("./routes/userInfoR");
const rideInfoRoute=require("./routes/rideInfoR");
const fareInfoRoute=require("./routes/fareInfoR");
const bookedRideRoute=require("./routes/bookedRideR");
const cors = require('cors');
app.use(cors())



//import mongoose from 'mongoose';
// Importing user route
//import router from './routes/users.js';
// const router = require('router')


const port = 3001

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("database connected");
})




// app.use(bodyParser.json())
// // Adding a Router
// app.use('/users', router);

// app.get('/', (req, res) => {
//     res.send('Hello Univers hjjjh to the world e!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })
app.use("/api/userInfoR/", userInfoRoute);
app.use("/api/rideInfoR/", rideInfoRoute);
app.use("/api/fareInfoR/", fareInfoRoute);
app.use("/api/bookedRideR/", bookedRideRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})