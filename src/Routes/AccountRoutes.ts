import express, { Express, Request, Response } from "express";
import AccountRepository from '../Repository/AccountRepository.js';
 import AccountService from "../Services/AccountService.js";
import AccountController from '../Controllers/AccountController.js';
 

const accountRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };

const accountRepository:AccountRepository = new AccountRepository();
const accountService:AccountService = new AccountService(accountRepository);
const accountController:AccountController=new AccountController(accountService);


accountRoutes.post("",accountController.getUserAccountById );
accountRoutes.get("/create",function (req: Request, res: Response) {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("accountForm.html", htmlRootDir);
  });

accountRoutes.post("/create",accountController.createAccountForUser);

export default accountRoutes;
