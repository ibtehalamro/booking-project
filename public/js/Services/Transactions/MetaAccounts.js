export class AccountMeta {
    name = '';
    id = 0;
    constructor(name) {
        this.setName(name);
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    isValidName(name) {
        if (!(name.length > 2 && name.length < 30)) {
            throw new Error(`name should be between 2 && 30 character`);
        }
    }
    setName(name) {
        this.isValidName(name);
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
//# sourceMappingURL=MetaAccounts.js.map