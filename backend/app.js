import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);
app.use(cors())

 
app.get('/*',(req,res)=>{
 
  res.sendFile(path.resolve(__dirname, '../frontend','build',"index.html"))
})
app.use(express.static(path.resolve(__dirname,'../frontend','build')))