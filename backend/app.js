import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import path from "path"; 


// Enable CORS
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("./frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve("./frontend/build/index.html"))
})