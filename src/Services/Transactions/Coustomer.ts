
import { AccountMeta } from "./MetaAccounts";
import { Reciept } from "./Reciept";

export class Coustomer extends AccountMeta{
    id : number =0;
    private reciept : Reciept | null = null;  
    static idCounter: number = 1;

    constructor(name : string ) {
        super(name);
        this.setId();
        Coustomer.idCounter+=1;
    }
    setId() : void{
        if(this.id != undefined){
        this.id = Coustomer.idCounter;
        }
    }
    getId() :number{
        return this.id;
    }   
    setReciept(reciept : Reciept) : void{
        this.reciept = reciept;
    }
    getReciept() :Reciept | null{
        return this.reciept ;
    }
    getInfo(){
        return `CustomerID :${this.getId()} CustomerName:${this.getName()}`
    }
}

