import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CompanysService } from './services/companys.service';
import { AppComponent } from './app.component';
import {FormsModule}  from '@angular/Forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { EditCouponsComponent } from './components/edit-coupons/edit-coupons.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

const appRoutes:Routes = [
   {path:'', redirectTo: "/welcome", pathMatch:"full"},
  {path:'create-coupon', component:CreateCouponComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'edit-coupons', component:EditCouponsComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateCouponComponent,
    EditCouponsComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
