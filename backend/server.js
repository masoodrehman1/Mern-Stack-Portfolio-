
import { app } from "./app.js";
import dotenv from 'dotenv';
import cloudinary from "cloudinary"
import {connectDatabase} from "./config/database.js"

dotenv.config({ path: "./backend/config/config.env" });
connectDatabase()
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(4000, () => {
    console.log("Server is ready at", process.env.PORT);
});


