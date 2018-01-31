import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  custName:string = null;

  constructor(private service:CustomersService) { }

  ngOnInit() {
    this.getCustomerName();
  }
  logout() {
    this.service.logout().subscribe(
      (res) => {
        console.log('bye bye .. :)')
      },
      (error) => { console.log('something went wrong trying to logout...') }
    );
    window.location.href = '/couponsSystemWeb/index.html';
  }

  getCustomerName(){
    this.service.getUserName().subscribe(
      (name) => {
        this.custName = name;
      },
      (error) => { console.log('something went wrong..!!.') }
    )
  }

}
