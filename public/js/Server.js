import express from "express";
import con from "./Database.js";
import cors from "cors";
import bodyParser from "body-parser";
import UserLoginController from "./Controllers/UserLoginController.js";
import UserLoginService from "./Services/UserLoginService.js";
import { UserRepository } from "./Repository/UserRepository.js";
const app = express();
const port = process.env.PORT || 8081;
app.use(cors());
//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const htmlRootDir = { root: "./public/" };
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
const userRepository = new UserRepository(con);
const userLoginService = new UserLoginService(userRepository);
const userLoginController = new UserLoginController(userLoginService);
app.post("/hello", userLoginController.userLogin);
app.get("/getdb", function (res) {
    const result = con.query("SELECT * FROM users", function (err, result) {
        if (err)
            throw err;
        res.json(result);
    });
    console.log(result);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=Server.js.map