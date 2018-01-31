import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  custName:string = null;
  constructor(private service:CustomersService) { }

  ngOnInit() {
    this.getCustName();
  }

  getCustName(){
    this.service.getUserName().subscribe(
      (name) => {
        this.custName = name;
      },
      (error) => { console.log('something went wrong with getting the customer name..!!.') }
    )
  }
}
