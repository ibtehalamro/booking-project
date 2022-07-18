import User from "../Models/User.js";
export class UserRepository {
    users = new Map([
        [1, new User("ibtehal.email.com", "1234", "ibtehal")],
        [2, new User("rahaf.email.com", "1234", "rahaf")],
        [3, new User("tala.email.com", "1234", "tala")],
    ]);
    getUserByEmail(email) {
        const users = this.getUsers();
        for (const [key, value] of users) {
            if (value.getEmail() === email) {
                return value;
            }
        }
        return null;
    }
    getUsers = () => {
        return this.users;
    };
}
//# sourceMappingURL=UserRepository.js.map