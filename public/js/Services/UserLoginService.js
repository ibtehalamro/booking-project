export default class UserLoginService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    authenticateUser = (user) => {
        const t = this.userRepository.getUserByEmail("ibtehal.email.com");
        console.log("user from service " + t?.getEmail());
        return user;
    };
}
//# sourceMappingURL=UserLoginService.js.map