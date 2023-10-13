import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const connectDatabase =async()=>{
    try{ await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

console.log("connected to database")}catch(error){console.error("error connecting to database:",error)};}
export {connectDatabase}