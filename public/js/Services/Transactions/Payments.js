export class Payment {
    amount = 0;
    date = '';
    PaidBy = 0;
    constructor(amount, date, PaidBy) {
        this.setAmount(amount);
        this.setDate(date);
        this.setPaidBy(PaidBy);
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getAmount() {
        return this.amount;
    }
    isValidDate(date) {
        let pattern = new RegExp("[0-3][0-9]-(0|1)[0-9]-(19|20)[0-9]{2}");
        return pattern.test(date);
    }
    setDate(date) {
        if (!this.isValidDate(date)) {
            throw new Error("Invalid Date");
        }
        this.date = date;
    }
    getDate() {
        return this.date;
    }
    setPaidBy(employeeId) {
        this.PaidBy = employeeId;
    }
    getPaidBy() {
        return this.PaidBy;
    }
}
//# sourceMappingURL=Payments.js.map