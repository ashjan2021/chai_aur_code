require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = require('./db/index.js');
connectDB();

/*
const express = require('express');
const app = express();
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on('error', (error)=>{
            console.log("Error: ",error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port: ${ process.env.PORT }`);
        })
    } catch (error) {
        console.error("errrr: ",error);
    }
} )();
*/