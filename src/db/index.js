import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // const connectionInstance = await mongoose.connect('mongodb+srv://ashjan2021:Ashish%402021@cac-b-p1.wzkjlvm.mongodb.net/CAC_B_P1');
        console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (err){
        console.log("MONGODB connection FAILED : ", err);
        process.exit(1);
    }
}

export default connectDB;