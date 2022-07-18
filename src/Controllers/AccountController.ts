import { Request, Response } from "express";
import { request } from "http";
import Account from "../Models/Account.js";
import AccountService from "../Services/AccountService.js";

export default class AccountController {
  private accountService: AccountService;
  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  getUserAccountById = (req: Request, res: Response) => {
    const userId = req.body.id;
    const account = this.accountService.getAccountByUserId(userId);
    const response = account
      ? { msg: "ok", account }
      : { msg: "error", description: "no account found" };
    res.json(response);
  };

  createAccountForUser = (req: Request, res: Response) => {
    //check if logged in user already have account
    const user = JSON.parse(req.body.user);
    const userAccount = this.accountService.getAccountByUserId(user.id);

    userAccount?.setAccountOwnerId(user.id);
    if (userAccount) {
      console.log("user have account ");
      res.json({ msg: "ok", account: userAccount });
    } else {
       const account:Account=new Account(req.body.account.companyName,req.body.account.country,req.body.account.currency)
      account.setAccountOwnerId(user.id);
       this.accountService.createAccountForUser(account);
      console.log("account not found");
    }
    //if yes return to the account page

    //if no then create the new account for the user and then show him his new account
    // console.log("createAccountForUser", req.body);
  };
}
