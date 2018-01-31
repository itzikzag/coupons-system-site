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
    public get getId():number{
        return this.id;
    }
    public set setId(id:number){
        this.id=id;
    }
    public get getName():string{
        return this.compName;
    }
    public set setName(name:string){
        this.compName=name;
    }
    public get getEmail():string{
        return this.email;
    }
    public set setEmail(email:string){
        this.email=email;
    }
    public get getPassword():string{
        return this.password;
    }
    public set setPassword(password:string){
        this.password = password;
    }
    
    }