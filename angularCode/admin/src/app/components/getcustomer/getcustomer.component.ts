import { AdminsService } from './../../services/admins.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-getcustomer',
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent implements OnInit {

  constructor(private service:AdminsService) { }
  customer:Customer = new Customer();
  id:number = 0;

  getCustomer(){
    var self = this;
    self.service.getCustomer(self.id).subscribe(data => self.customer=data);
    
  }
  ngOnInit() {
  }

}
