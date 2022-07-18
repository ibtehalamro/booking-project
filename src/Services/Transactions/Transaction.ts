export interface ITransaction{

        amount :number;
        date : string;
        PaidBy :number;

        getAmount(): number; 
        getDate() :string;

        getPaidBy() : number;

}
