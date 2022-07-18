import express, { Express, Request, Response } from "express";
 

const homeRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };

homeRoutes.get("", function (req: Request, res: Response) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("index.html", htmlRootDir);
});

export default homeRoutes;
