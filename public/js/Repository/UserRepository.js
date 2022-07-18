import User from "../Models/User.js";
export class UserRepository {
    users = new Map([
        [1, new User("ibtehal.email.com", "1234", "ibtehal")],
        [1, new User("rahaf.email.com", "1234", "rahaf")],
        [1, new User("tala.email.com", "1234", "tala")],
    ]);
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async getUserByEmail(email) {
        let user = null;
        console.log("before query");
        user = await this.getUser(email);
        console.log("after query");
        return user;
    }
}
//# sourceMappingURL=UserRepository.js.map