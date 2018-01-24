export class Customer{
    public id:number;
    public custName:string;
    public password:string;
    
    constructor(id?:number, name?:string, password?:string){
        this.id = id;
    this.custName = name;
    this.password = password;
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number){
        this.id=id;
    }
    public getName():string{
        return this.custName;
    }
    public setName(name:string){
        this.custName=name;
    }
    
    public getPassword():string{
        return this.password;
    }
    public setPassword(password:string){
        this.password = password;
    }
}