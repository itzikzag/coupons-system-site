import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AdminsService } from './services/admins.service';
import {FormsModule}  from '@angular/Forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetcompanyComponent } from './components/getcompany/getcompany.component';

import { GetcustomerComponent } from './components/getcustomer/getcustomer.component';
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component';
import { CreatecompanyComponent } from './components/createcompany/createcompany.component';
import { CreatecustomerComponent } from './components/createcustomer/createcustomer.component';
import { EditCompaniesComponent } from './components/edit-companies/edit-companies.component';
import { EditCustomersComponent } from './components/edit-customers/edit-customers.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

const appRoutes:Routes = [
  {path:'', redirectTo: "/welcome", pathMatch:"full"},
  {path:'create-company', component:CreatecompanyComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'edit-companies', component:EditCompaniesComponent},
  {path:'create-customer', component:CreatecustomerComponent},
  {path:'edit-customers', component:EditCustomersComponent},
  {path:'get-company', component:GetcompanyComponent},
  {path:'get-customer', component:GetcustomerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GetAllCompaniesComponent,
    GetcompanyComponent,
   
    GetcustomerComponent,
    GetallcustomersComponent,
    CreatecompanyComponent,
    CreatecustomerComponent,
    EditCompaniesComponent,
    EditCustomersComponent,
    NavigatorComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
