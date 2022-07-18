import express, { Express, Request, Response } from "express";
import UserLoginController from "../Controllers/UserLoginController.js";
import { UserRepository } from "../Repository/UserRepository.js";
import UserLoginService from "../Services/UserLoginService.js";

const loginRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };
const userRepository = new UserRepository();
const userLoginService = new UserLoginService(userRepository);
const userLoginController = new UserLoginController(userLoginService);

loginRoutes.get("", function (req: Request, res: Response) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("login.html", htmlRootDir);
});

loginRoutes.post("", userLoginController.userLogin);

export default loginRoutes;
