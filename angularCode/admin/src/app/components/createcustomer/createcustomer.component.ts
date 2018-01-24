import { Customer } from './../../classes/customer';
import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  constructor(private service:AdminsService) { }
 customer = new Customer;
  ngOnInit() {
  }

  createCustomer(){
    var self = this;
  self.service.createCustomer(self.customer).subscribe(
    (sucess)=>{
      alert('customer created!')
    },
    (error)=>{
      alert('error occured while trying to create a new customer! that user name is probably already taken')
    }
    
  );
  }
}
