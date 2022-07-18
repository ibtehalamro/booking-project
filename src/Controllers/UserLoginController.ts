import { Request, Response } from "express";
import User from "../Models/User.js";
import UserLoginService from "../Services/UserLoginService.js";

export default class UserLoginController {
  private userLoginService: UserLoginService;

  constructor(userLoginService: UserLoginService) {
    this.userLoginService = userLoginService;
  }

  userLogin = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = new User(email, password);

    const userData = this.userLoginService.authenticateUser(user);
    userData
      ? res.json({ msg: "ok" ,user:userData})
      : res.json({ msg: "error", description: "bad credentials" });
  };
}
