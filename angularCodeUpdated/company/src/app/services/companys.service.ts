import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, ResponseContentType } from '@angular/http';
import { Coupon } from '../classes/Coupon';

@Injectable()
export class CompanysService {

  constructor(private http: Http) { }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
  createCoupon(coupon: Coupon) {
    var self = this;
    return self.http.post("./createcoupon", coupon)
      .catch(this.handleError).catch(this.handleError)
  }

  deleteCoupon(coupon: Coupon) {
    var self = this;
    return self.http.delete("./deletecoupon", { body: coupon })
      .catch(this.handleError)
  }
  updateCoupon(coupon: Coupon) {
    var self = this;
    return self.http.put( "./updatecoupon", coupon)
      .catch(this.handleError)
  }
  getCoupon(id: number) {
    var self = this;
    return this.http.get( "./getcoupon/" + id)
      .map((res) => res.json())
      .catch(this.handleError)
  }

  getAllCoupons() {
    var self = this;
    return self.http.get("./getallcoupon")
      .map((res) => res.json())
      .catch(this.handleError)
  }

  getCouponsByType(couponType: CouponType) {
    var self = this;
    return self.http.get("./getcouponsbytype/" + couponType)
      .map((res) => res.json())
      .catch(this.handleError)
  }

  getCouponsByPrice(price: number) {
    var self = this;
    return self.http.get("./getcouponsbyprice/" + price)
      .map((res) => res.json())
      .catch(this.handleError)
  }

  getCouponsByDate(date: Date) {
    var self = this;
    return self.http.get("./getcouponsbydate/" + date)
      .map((res) => res.json())
      .catch(this.handleError)
  }

  logout(){
    var self = this;
    return self.http.get('./companylogout')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getUserName(){
    return this.http.get('./getcompanyusername')
      .map((res) => res.text())
      .catch(this.handleError);
  }
}
