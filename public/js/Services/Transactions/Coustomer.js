import { AccountMeta } from "./MetaAccounts";
export class Coustomer extends AccountMeta {
    id = 0;
    reciept = null;
    static idCounter = 1;
    constructor(name) {
        super(name);
        this.setId();
        Coustomer.idCounter += 1;
    }
    setId() {
        if (this.id != undefined) {
            this.id = Coustomer.idCounter;
        }
    }
    getId() {
        return this.id;
    }
    setReciept(reciept) {
        this.reciept = reciept;
    }
    getReciept() {
        return this.reciept;
    }
    getInfo() {
        return `CustomerID :${this.getId()} CustomerName:${this.getName()}`;
    }
}
//# sourceMappingURL=Coustomer.js.map