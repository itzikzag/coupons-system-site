import { Component, OnInit } from '@angular/core';
import { Company } from '../../classes/company';
import { AdminsService } from '../../services/admins.service';


@Component({
  selector: 'app-getcompany',
  templateUrl: './getcompany.component.html',
  styleUrls: ['./getcompany.component.css']
})
export class GetcompanyComponent implements OnInit {

  constructor(private service:AdminsService) { }
  company:Company = new Company();
  company2:Company = new Company();
  id:number = 0;
  ngOnInit() {
  }
  getCompany(){
    var self = this;
    self.service.getCompany(self.id).subscribe(data => self.company=data);
    
  }
}
