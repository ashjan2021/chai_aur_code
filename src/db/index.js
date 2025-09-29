const mongoose = require('mongoose');
const DB_NAME  = require('../constants');

const connectDB = async ()=>{
    try{
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (err){
        console.log("MONGODB connection FAILED : ", err);
        process.exit(1);
    }
}

module.exports = connectDB;