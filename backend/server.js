import { error } from "console";
import { app } from "./app.js";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {connectDatabase} from "./config/database.js"

dotenv.config({ path: "./backend/config/config.env" });
connectDatabase()
app.listen(process.env.PORT, () => {
    console.log("Server is ready");
});