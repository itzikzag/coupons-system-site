import { Component, OnInit } from '@angular/core';
import { CompanysService } from '../../services/companys.service';
import { Coupon } from '../../classes/Coupon';

@Component({
  selector: 'app-edit-coupons',
  templateUrl: './edit-coupons.component.html',
  styleUrls: ['./edit-coupons.component.css']
})
export class EditCouponsComponent implements OnInit {

  constructor(private service:CompanysService) { }

  coupons: Coupon[] = [];

  coupon = new Coupon();
  coupon2 = new Coupon();
  filteredPrice:number = 0;
  filteredDate:Date = null;
  filteredType:CouponType = null;


  ngOnInit() {
    this.getAllCoupons();
  }

  updateCoupon() {
    var self = this;
    self.service.updateCoupon(self.coupon).subscribe(
      (success)=>{
        this.service.getAllCoupons().subscribe(
          (coupons)=>{this.coupons = coupons},
          (error)=>console.log('error updating coupons list..') 
        )
      },
      (error)=>alert('error updating coupon!')
    );

  }
  deleteCoupon() {
    var self = this;
    self.service.deleteCoupon(self.coupon).subscribe(
      (success)=>{
        this.service.getAllCoupons().subscribe(
          (coupons)=>{this.coupons = coupons},
          (error)=>console.log('error updating coupons list..') 
        )
      },
      (error)=>alert('error deleting coupon!')
    );

  }
  setCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getCouponsByPrice(){
    this.service.getCouponsByPrice(this.filteredPrice).subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('error getting coupons by price...')
      }
    )
  }
  
  getCouponsByDate(){
    this.service.getCouponsByDate(this.filteredDate).subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('error getting coupons by date...')
      }
    )
  }

  getCouponsByType(){
    this.service.getCouponsByType(this.filteredType).subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('error getting coupons by type...')
      }
    )
  }

  getAllCoupons(){
    this.service.getAllCoupons().subscribe(
      (coupons) => {
        this.coupons = coupons;
      },
      (error) => {
        alert('error getting coupons list...')
      }
    )
  }
}
