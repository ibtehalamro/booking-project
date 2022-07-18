import { AccountMeta } from "./MetaAccounts";
export class Employee extends AccountMeta {
    id = 0;
    payment = null;
    static idCounter = 1;
    constructor(name) {
        super(name);
        this.setId();
        Employee.idCounter += 1;
    }
    setId() {
        if (this.id != undefined) {
            this.id = Employee.idCounter;
        }
    }
    getId() {
        return this.id;
    }
    setPayment(payment) {
        this.payment = payment;
    }
    getPayment() {
        return this.payment;
    }
    getInfo() {
        return `EmployeeID : ${this.getId()} EmployeeName :${this.getName()}`;
    }
}
//# sourceMappingURL=Employee.js.map