import { Component, OnInit } from '@angular/core';
import { CompanysService } from '../../services/companys.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
compName:string = null;
  constructor(private service:CompanysService) { }

  ngOnInit() {
    this.getCompName();
  }
  logout() {
    this.service.logout().subscribe(
      (res) => {
        console.log('bye bye .. :)')
      },
      (error) => { console.log('something went wrong...') }
    );
    window.location.href = '/couponsSystemWeb/index.html';
  }

  getCompName(){
    this.service.getUserName().subscribe(
      (name) => {
        this.compName = name;
      },
      (error) => { console.log('something went wrong..!!.') }
    )
  }
}
