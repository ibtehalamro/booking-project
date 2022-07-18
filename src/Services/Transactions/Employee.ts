import { AccountMeta } from "./MetaAccounts";
import {Payment} from "./Payments"

export class Employee extends AccountMeta {
    id : number = 0;
    private payment : Payment | null = null;
    static idCounter : number = 1;
    
    constructor(name : string ) {
        super(name );
        this.setId()
        Employee.idCounter += 1;
    }

    setId() : void {
        if(this.id != undefined){
        this.id = Employee.idCounter
        }
    }

    getId() :number {
        return this.id;
    }

    setPayment(payment : Payment) : void {
        this.payment = payment;
    }

    getPayment() : Payment | null {
        return this.payment;
    }

    getInfo() {
        return `EmployeeID : ${this.getId()} EmployeeName :${this.getName()}`
    }

}



