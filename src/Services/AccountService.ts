import Account from '../Models/Account.js';
import AccountRepository from '../Repository/AccountRepository.js';
export default class AccountService{
    private accountRepository:AccountRepository;

    constructor(accountRepository:AccountRepository){
        this.accountRepository = accountRepository;
    }

    getAccountByUserId=(userId:number):Account|null=> {
        const account = this.accountRepository.getAccountByUserId(userId);
        return account==undefined ? null : account;
    }

    createAccountForUser=(account:Account)=>{
        this.accountRepository.addNewAccount(account)
    }
}