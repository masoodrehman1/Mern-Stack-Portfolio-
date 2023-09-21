import mongoose from "mongoose";

const connectionString = 'mongodb://maasoodrehman:mynameiskhan123@ac-jrmoj2l-shard-00-00.jtr0lnh.mongodb.net:27017,ac-jrmoj2l-shard-00-01.jtr0lnh.mongodb.net:27017,ac-jrmoj2l-shard-00-02.jtr0lnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-cm57xw-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectDatabase =async()=>{
    try{ await mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
console.log("connected to database")}catch(error){console.error("error connecting to database:",error)};}
export {connectDatabase}