export default class User {
    email = "";
    password = "";
    name = "";
    static userIDCounter = 1;
    id = 0;
    constructor(email, password, name = "") {
        this.setEmail(email);
        this.setPassword(password);
        this.setName(name);
        this.id = User.userIDCounter++;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getName() {
        return this.name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) { this.id = id; }
    getId() { return this.id; }
}
//# sourceMappingURL=User.js.map