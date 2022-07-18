import { Coustomer } from "./Coustomer";
import { Payment } from "./Payments";
import { Reciept } from "./Reciept";
import { Employee } from "./Employee";

class AllTransaction {
    private coustomers :Coustomer[] =[];
    private employees :Employee[]=[];
    private payments :Payment[]=[];
    private reciepts :Reciept[]=[];
    

    setPayments(payments : Payment[]) :void{
        
        this.payments = payments;
    }

    getpayments () :Payment[]{
        return this.payments;
    }

    addpayment(payment : Payment) :void{
        this.payments.push(payment)
    }
    setReciepts(reciept : Reciept[]) :void{
        this.reciepts = reciept;
    }
    
    getReciepts():Reciept[]{
        return this.reciepts;
    }

    addReciept(reciept : Reciept){
        this.reciepts.push(reciept)
    }

    setCoustomers(coustomer : Coustomer[]){
        this.coustomers = coustomer;
    }

    addCoustomer(coustomer : Coustomer) :void{
        this.coustomers.push(coustomer);
    }

    getCustomers() :Coustomer[]{
        return this.coustomers;
    }

    setEmployees(employee : Employee[]){
        this.employees = employee
    }

    addEmployee(employee : Employee) :void{
        this.employees.push(employee)
    }

    getEmployees() :Employee[]{
        return this.employees;
    }
}

const Transaction1 = new AllTransaction();


