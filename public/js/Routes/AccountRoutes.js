import express from "express";
import AccountRepository from '../Repository/AccountRepository.js';
import AccountService from "../Services/AccountService.js";
import AccountController from '../Controllers/AccountController.js';
const accountRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };
const accountRepository = new AccountRepository();
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);
accountRoutes.post("", accountController.getUserAccountById);
accountRoutes.get("/create", function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("accountForm.html", htmlRootDir);
});
accountRoutes.post("/create", accountController.createAccountForUser);
export default accountRoutes;
//# sourceMappingURL=AccountRoutes.js.map