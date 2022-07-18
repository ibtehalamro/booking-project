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
        userData
            ? res.json({ msg: "ok", user: userData })
            : res.json({ msg: "error", description: "bad credentials" });
    };
}
//# sourceMappingURL=UserLoginController.js.map