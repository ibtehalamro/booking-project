import { Coustomer } from "./Coustomer";
import { ITransaction } from "./Transaction";
export class Reciept implements ITransaction{
    amount : number = 0;
    date : string ='';
    PaidBy : number = 0;

    constructor(amount : number , date : string , PaidBy : number){
        this.setAmount(amount);
        this.setDate(date);
        this.setPaidby(PaidBy);
    }
    
    setAmount(amount : number) : void{
        this.amount = amount;
    } 
    getAmount() : number{
        return this.amount;
    }
    private isValidDate(date :string) {
        let pattern = new RegExp("[0-3][0-9]-(0|1)[0-9]-(19|20)[0-9]{2}");
        return pattern.test(date);
    }
    setDate(date : string) {
        if (!this.isValidDate(date)) {
            throw new Error("Invalid Date");
        }
        this.date = date;
    }
    getDate() : string{
        return this.date;
    }
    
    setPaidby(coustomerId : number) : void{
        
        this.PaidBy= coustomerId;
    }
    getPaidBy() : number{
        return this.PaidBy;
    }
}