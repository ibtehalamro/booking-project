import User from "../Models/User.js";
export default class UserLoginController {
    userLoginService;
    constructor(userLoginService) {
        this.userLoginService = userLoginService;
    }
    userLogin = (req, res) => {
        const { email, password } = req.body;
        const user = new User(email, password);
        const userData = this.userLoginService.authenticateUser(user);
        if (userData) {
            res.json(JSON.stringify(userData));
        }
        else
            res.json({ error: "invalid" });
    };
}
//# sourceMappingURL=UserLoginController.js.map