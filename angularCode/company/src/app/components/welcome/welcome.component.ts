import { Component, OnInit } from '@angular/core';
import { CompanysService } from '../../services/companys.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  compName:string = null;
  constructor(private service:CompanysService) { }

  ngOnInit() {
    this.getCompName();
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
