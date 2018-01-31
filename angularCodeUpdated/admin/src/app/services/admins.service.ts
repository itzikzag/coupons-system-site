import { Customer } from './../classes/customer';
import { Company } from './../classes/company';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminsService {
 

  constructor(private http:Http) { }
 
errorHandler(error:Response){
  return Observable.throw(error);
}

  getCompany(compId:number){
    var self = this;
     return this.http.get('./getcompany/'+compId)
    .map((res) => res.json()) 
    .catch(this.errorHandler)
  }

  getAllCompanies(){
  var self = this;
   return this.http.get('./getallcompanies')
  .map((res) => res.json())
  .catch(this.errorHandler)
   
}
createCompany(company:Company){
  var self = this;

   return self.http.post("./createcompany",company)
   .catch(this.errorHandler)
 
}
updateCompany(company:Company){
  var self = this;
  
     return self.http.put("./updatecompany",company)
     .catch(this.errorHandler)
    
}
deleteCompany(company:Company){
  var self = this;
  
    return self.http.delete("./deletecompany",{ body: company })
    .catch(this.errorHandler)
    
}

getCustomer(id:number){
  var self = this;
  return this.http.get("./getcustomer/"+id)
 .map((res) => res.json())
 .catch(this.errorHandler)
 
  
  
}
getAllCustomers(){
  var self = this;
  return this.http.get('./getallcustomer')
.map((res) => res.json())
.catch(this.errorHandler) 
 
}
createCustomer(customer:Customer){
  var self = this;
  
    return self.http.post("./createcustomer",customer)
    .catch(this.errorHandler)
}
updateCustomer(customer:Customer){
  var self = this;
  
    return self.http.put("./updatecustomer",customer)
    .catch(this.errorHandler)
}
deleteCustomer(customer:Customer){
var self = this;

   return self.http.delete("./deletecustomer",{ body: customer })
   .catch(this.errorHandler)
}
logout(){
  var self = this;
  return self.http.get('./adminlogout')
    .map((res) => res.json())
    .catch(this.errorHandler);
}

}
