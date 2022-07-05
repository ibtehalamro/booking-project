export class UserRepository {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    getUser = (email) => {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM users WHERE email = '${email}'`, (error, elements) => {
                if (error) {
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };
    async getUserByEmail(email) {
        let user = null;
        console.log("before query");
        user = await this.getUser(email);
        console.log("after query");
        return user;
    }
}
//# sourceMappingURL=UserRepository.js.map