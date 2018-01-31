import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetPurchasedCouponsComponent } from './components/get-purchased-coupons/get-purchased-coupons.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { CustomersService } from './services/customers.service';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes:Routes = [
   {path:'', redirectTo: "/welcome", pathMatch:"full"},
  {path:'buy-coupon', component:PurchaseCouponComponent},
   {path:'welcome', component:WelcomeComponent},
  {path:'get-coupons', component:GetPurchasedCouponsComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    GetPurchasedCouponsComponent,
    PurchaseCouponComponent,
    NavigatorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
