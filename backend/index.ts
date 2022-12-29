import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import route from "./routes";
import cors from "cors";
import * as bodyparser from "body-parser";
import ytdl from "ytdl-core";
dotenv.config();
const app: Express = express();

app.use(cors());
app.use(bodyparser.json());
const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use("/", route);
