import Account from '../Models/Account.js';
export default class AccountRepository {
    accounts = new Map([
        [0, new Account("bus1", "jordan", "JOD")],
        [2, new Account("bus2", "canada", "USD")],
        [3, new Account("bus3", "hebron", "ILS")]
    ]);
    constructor() { }
    getAccountByUserId = (userId) => {
        let account = null;
        for (const [key, value] of this.accounts) {
            if (key == userId) {
                account = this.accounts.get(key);
            }
            ;
            break;
        }
        return account;
    };
    addNewAccount(account) {
        this.accounts.set(account.getAccountOwnerId(), account);
        console.log(this.accounts);
    }
}
//# sourceMappingURL=AccountRepository.js.map