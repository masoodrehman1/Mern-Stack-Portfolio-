import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
// import path from "path"; 
import cors from "cors"
  
  app.use(cors({ origin: 'https://mern-stack-portfolio-sdar.vercel.app',methods:["POST","GET","PUT","DELETE"],credentials:true}));

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

