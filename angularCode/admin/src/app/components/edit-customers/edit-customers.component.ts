import { Customer } from '../../classes/customer';
import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {

  constructor(private service:AdminsService) { }
  customer = new Customer();
  customer2 = new Customer();
  customers: Customer[] = [];

  ngOnInit() {this.service.getAllCustomers().subscribe(
    (customers) => {
      this.customers = customers;
    },
    (error) => {
      alert('error getting customers...')
    }
  )
  }

  updateCustomer(){
    var self = this;
    self.service.updateCustomer(self.customer).subscribe(
      (success)=>{
      this.service.getAllCustomers().subscribe(
        (customers)=>{this.customers = customers},
        (error)=>console.log('error..') 
      )
    },
    (error)=>alert('error updating customer!'));

  }
  deleteCustomer(){
    var self = this;
    self.service.deleteCustomer(self.customer) .subscribe(
      (success)=>{
        this.service.getAllCustomers().subscribe(
          (customers)=>{this.customers = customers},
          (error)=>console.log('error..') 
        )
      },
      (error)=>alert('error deleting customer!')
    );
   
  }


  setCustomer(customer: Customer) {
    this.customer = customer;
  }
}
