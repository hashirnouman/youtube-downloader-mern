import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import route from "./routes";
import cors from "cors";
import * as bodyparser from "body-parser";
import mongoose from "mongoose";
import ytdl from "ytdl-core";
dotenv.config();
const app: Express = express();
app.use(cors());
app.use(bodyparser.json());
const port = process.env.PORT;
const uri: any = process.env.URI;
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/", route);
