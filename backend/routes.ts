import express from "express";

import cors from "cors";
import ytdl from "ytdl-core";
import fs from "fs";
const axios = require("axios");
const route = express.Router();
route.get("/download", async (req, res) => {
  let link: any = req.query.url;
  const datas = await ytdl.getBasicInfo(link);
  const title: any = datas.videoDetails.title;
  console.log(title);
  res.header("Content-Disposition", `attachment; filename="video.mp4`);
  const str: any = "mp4";
  const id = ytdl.getVideoID(link);
  ytdl(`https://youtu.be/${id}`, {
    format: str,
    filter: "videoandaudio",
  }).pipe(res);
});

route.post("/view", async (req, res) => {
  try {
    const link: any = req.body.link;
    console.log(link);
    const resp = await ytdl.getBasicInfo(link);

    res.send({
      iframe: resp.videoDetails.embed.iframeUrl,
      link: link,
    });
  } catch (error) {
    console.log("error");
  }
});
route.get("/test", (req, res) => {
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  ytdl(url, {
    filter: "videoandaudio",
  });
  res.header("");
});

export default route;
