
import { app } from "./app.js";
import dotenv from 'dotenv';
import cloudinary from "cloudinary" 
import {connectDatabase} from "./config/database.js"
import cors from "cors"
const allowedOrigins = ['https://mern-stack-portfolio-frontend.vercel.app'];

const corsOptions = {
    origin: ['https://mern-stack-portfolio-frontend.vercel.app', 'http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));
  
app.use(cors(corsOptions));

dotenv.config({ path: "./config/config.env" });
connectDatabase()
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
    console.log("Server is ready at", process.env.PORT);
});

