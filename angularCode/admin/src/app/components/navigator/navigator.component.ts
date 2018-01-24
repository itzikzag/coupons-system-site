import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private service:AdminsService) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout().subscribe(
      (res) => {
        console.log('bye bye .. :)')
      },
      (error) => { console.log('something went wrong...') }
    );
    window.location.href = 'http://localhost:8080/index.html';
  }
}
