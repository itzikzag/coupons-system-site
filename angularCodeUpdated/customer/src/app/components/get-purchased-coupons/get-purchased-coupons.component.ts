import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../classes/Coupon';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-get-purchased-coupons',
  templateUrl: './get-purchased-coupons.component.html',
  styleUrls: ['./get-purchased-coupons.component.css']
})
export class GetPurchasedCouponsComponent implements OnInit {
  coupon:Coupon = new Coupon();
  coupons:Coupon[] = [];
  filteredPrice:number = 0;
  filteredType:CouponType = null;

  constructor(private service:CustomersService) { }

  ngOnInit() {
    this.getAllPurchasedCoupons();
  }
setCoupon(coupon:Coupon){
this.coupon = coupon;
}

getCouponsByPrice(){
  this.coupons = [];
  this.service.getAllPurchasedCouponsByPrice(this.filteredPrice).subscribe(
    (coupons) => {
      for (let coupon of coupons) {
        coupon = new Coupon(coupon);
        this.coupons.push(coupon);
      }
    },
    (error) => {
      alert('error getting purchased coupons by price...')
    }
  )
}


getCouponsByType(){
  this.service.getAllPurchasedCouponsByType(this.filteredType).subscribe(
    (coupons) => {
      this.coupons = coupons;
    },
    (error) => {
      alert('error getting purchased coupons by type...')
    }
  )
}
getAllPurchasedCoupons(){
  this.coupons = [];
      this.service.getAllPurchasedCoupons().subscribe(
        (coupons) => {
          for (let coupon of coupons) {
            coupon = new Coupon(coupon);
            this.coupons.push(coupon);
          }
        },
        (error) => { alert('something went wrong loading the purchased coupons list...') }
      );
      console.log(this.coupons)
}
}
