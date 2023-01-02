import express from "express";
import ytdl from "ytdl-core";

const axios = require("axios");
const contentDisposition = require("content-disposition");
const route = express.Router();
route.get("/download", async (req, res) => {
  let link: any = req.query.url;
  let format: any = req.query.format;
  const datas = await ytdl.getBasicInfo(link);
  const title: any = datas.videoDetails.title;
  const filename = `${title}.mp4`;
  const audioFilename = `${title}.mp3`;
  const id = ytdl.getVideoID(link);
  if (format == "mp4") {
    res.writeHead(200, {
      "Content-Disposition": contentDisposition(filename),
    });
    const str: any = "mp4";
    ytdl(`https://youtu.be/${id}`, {
      format: str,
      filter: "videoandaudio",
    }).pipe(res);
  } else if (format == "mp3") {
    res.writeHead(200, {
      "Content-Disposition": contentDisposition(audioFilename),
    });
    const str: any = "mp3";
    ytdl(`https://youtu.be/${id}`, {
      format: str,
      filter: "audio",
    }).pipe(res);
  }
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
route.get("/test", async (req, res) => {
  const link: any = req.query.link;
  const resp = await ytdl.getInfo(link);
  const arr = resp.formats
    .map((val) => val.qualityLabel)
    .filter((val, index, self) => self.indexOf(val) == index && val != null);
  res.send(arr);
});

export default route;
