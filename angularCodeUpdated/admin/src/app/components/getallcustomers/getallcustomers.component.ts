import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';
import { Customer } from '../../classes/customer';

@Component({
  selector: 'app-getallcustomers',
  templateUrl: './getallcustomers.component.html',
  styleUrls: ['./getallcustomers.component.css']
})
export class GetallcustomersComponent implements OnInit {

  constructor(private service:AdminsService) { }
  customers:Customer[] = new Array;
  ngOnInit() {
  }
  getAllCustomers(){
    var self = this;
    self.service.getAllCustomers().subscribe(data => self.customers=data );
    
  }

}
