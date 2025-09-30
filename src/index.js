// require('dotenv').config({ path: './env'});
import dotenv from 'dotenv';
import connectDB from './db/index';
import app from './app';
dotenv.config({
    path: './env'
});

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=> {
    const server = app.listen(PORT, ()=> {
        console.log(`Server is running at port : ${PORT}`);
    })

    server.on('error', (err)=> {
        console.log('Server error:', err.message);
        process.exit(1);
    })
}) 
.catch((err)=> {
    console.log('Mongodb connection failed.', err);
})




















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