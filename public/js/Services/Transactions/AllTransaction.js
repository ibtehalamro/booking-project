class AllTransaction {
    coustomers = [];
    employees = [];
    payments = [];
    reciepts = [];
    setPayments(payments) {
        this.payments = payments;
    }
    getpayments() {
        return this.payments;
    }
    addpayment(payment) {
        this.payments.push(payment);
    }
    setReciepts(reciept) {
        this.reciepts = reciept;
    }
    getReciepts() {
        return this.reciepts;
    }
    addReciept(reciept) {
        this.reciepts.push(reciept);
    }
    setCoustomers(coustomer) {
        this.coustomers = coustomer;
    }
    addCoustomer(coustomer) {
        this.coustomers.push(coustomer);
    }
    getCustomers() {
        return this.coustomers;
    }
    setEmployees(employee) {
        this.employees = employee;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        return this.employees;
    }
}
const Transaction1 = new AllTransaction();
export {};
//# sourceMappingURL=AllTransaction.js.map