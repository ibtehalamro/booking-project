export default class AccountService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    getAccountByUserId = (userId) => {
        const account = this.accountRepository.getAccountByUserId(userId);
        return account == undefined ? null : account;
    };
    createAccountForUser = (account) => {
        this.accountRepository.addNewAccount(account);
    };
}
//# sourceMappingURL=AccountService.js.map