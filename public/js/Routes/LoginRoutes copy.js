import express from "express";
import UserLoginController from "../Controllers/UserLoginController.js";
import { UserRepository } from "../Repository/UserRepository.js";
import UserLoginService from "../Services/UserLoginService.js";
const loginRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };
loginRoutes.get("", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("login.html", htmlRootDir);
});
//here take the input then validate user 
const userRepository = new UserRepository();
const userLoginService = new UserLoginService(userRepository);
const userLoginController = new UserLoginController(userLoginService);
loginRoutes.post("", userLoginController.userLogin);
export default loginRoutes;
//# sourceMappingURL=LoginRoutes%20copy.js.map