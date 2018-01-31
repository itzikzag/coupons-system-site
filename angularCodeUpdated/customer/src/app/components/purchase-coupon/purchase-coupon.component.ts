import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Coupon } from '../../classes/Coupon';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {
coupon:Coupon = new Coupon();
  coupons:Coupon[] = [];

  constructor(private service:CustomersService) { }

  ngOnInit() {
    this.service.getAllCoupons().subscribe(
      (coupons)=>{this.coupons = coupons},
      (error)=>{alert('error getting coupons')}
    )
  }
setCoupon(coupon:Coupon){
this.coupon = coupon;
}

buyCoupon(){
  this.service.buyCoupon(this.coupon).subscribe(
    (success)=>{alert('coupon bought successfully')},
    (error)=>{alert('error buying coupon! check if you didnt purchase it already!')}
  
  )
}
}
