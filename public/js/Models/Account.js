export default class Account {
    businessName;
    country;
    currency;
    accountOwnerId = 0;
    MAX_ALLOWED_USERS = 2;
    users = [];
    constructor(businessName, country, currency) {
        this.businessName = businessName;
        this.country = country;
        this.currency = currency;
    }
    getBusinessName() {
        return this.businessName;
    }
    setBusinessName(value) {
        this.businessName = value;
    }
    getCountry() {
        return this.country;
    }
    setCountry(value) {
        this.country = value;
    }
    getCurrency() {
        return this.currency;
    }
    setCurrency(value) {
        this.currency = value;
    }
    getAccountOwnerId() {
        return this.accountOwnerId;
    }
    setAccountOwnerId(value) {
        this.accountOwnerId = value;
    }
}
//# sourceMappingURL=Account.js.map