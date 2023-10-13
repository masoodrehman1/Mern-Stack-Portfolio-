import express from "express";
import cookieParser from "cookie-parser";
export const app = express();
import cors from "cors"
import path from "path"

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);
app.use(cors())


app.use(express.static(path.join( '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join('../frontend/build', 'index.html'));
});