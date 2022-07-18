
export abstract class AccountMeta { 

    private name : string = '';
    id : number = 0;
    
    constructor(name : string) {
        this.setName(name);
    }

    setId(id :number) :void{
        this.id = id;
    }
    getId() : number{
        return this.id;
    }
    isValidName(name : string) {
        if(!(name.length > 2 && name.length < 30)){
            throw new Error(`name should be between 2 && 30 character`)
        }
    }
    setName(name : string) : void {
        this.isValidName(name);
        this.name = name;
    }
    getName() : string {
        return this.name;
    }
    abstract getInfo() :any;
}