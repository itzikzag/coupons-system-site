import { AdminsService } from './../../services/admins.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../classes/company';


@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  constructor(private service:AdminsService) { }
  companies:Company[] = new Array;
  ngOnInit() {
  }
  getAllCompanies(){
    var self = this;
    self.service.getAllCompanies().subscribe(data => self.companies=data );
    
  }

}
