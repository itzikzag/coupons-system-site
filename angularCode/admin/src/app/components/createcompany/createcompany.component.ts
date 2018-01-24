import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';
import { Company } from '../../classes/company';
import swal from 'sweetalert';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  constructor(private service:AdminsService) { }
  company = new Company();


  ngOnInit() {
    
  }
createCompany(){
  var self = this;
self.service.createCompany(self.company).subscribe(

(sucess)=>{
  alert('company created!')
},
(error)=>{
  alert('error occured while trying to create a new company! that user name is probably already taken')
}

);

}
}
