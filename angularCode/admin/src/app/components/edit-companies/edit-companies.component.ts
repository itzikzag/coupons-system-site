import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';
import { Company } from '../../classes/company';

@Component({
  selector: 'app-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.css']
})
export class EditCompaniesComponent implements OnInit {

  constructor(private service: AdminsService) { }
  companies: Company[] = [];

  company = new Company();
  company2 = new Company();

  ngOnInit() {
    this.service.getAllCompanies().subscribe(
      (companies) => {
        this.companies = companies;
      },
      (error) => {
        alert('error getting companies...')
      }
    )
  }

  updateCompany() {
    var self = this;
    self.service.updateCompany(self.company).subscribe(
      (success)=>{
        this.service.getAllCompanies().subscribe(
          (companies)=>{this.companies = companies},
          (error)=>console.log('error..') 
        )
      },
      (error)=>alert('error updating company!')
    );

  }
  deleteCompany() {
    var self = this;
    self.service.deleteCompany(self.company).subscribe(
      (success)=>{
        this.service.getAllCompanies().subscribe(
          (companies)=>{this.companies = companies},
          (error)=>console.log('error..') 
        )
      },
      (error)=>alert('error deleting company!')
    );

  }
  setCompany(company: Company) {
    this.company = company;
  }
}
