export class Company{
    public id:number;
    public compName:string;
    public password:string;
    public email:string;
    
    constructor(id?:number, name?:string, password?:string, email?:string){
        this.id = id;
    this.compName = name;
    this.password = password;
    this.email = email;
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number){
        this.id=id;
    }
    public getName():string{
        return this.compName;
    }
    public setName(name:string){
        this.compName=name;
    }
    public getEmail():string{
        return this.email;
    }
    public setEmail(email:string){
        this.email=email;
    }
    public getPassword():string{
        return this.password;
    }
    public setPassword(password:string){
        this.password = password;
    }
    
    }