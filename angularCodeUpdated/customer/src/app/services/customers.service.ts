import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, ResponseContentType } from '@angular/http';
import { Coupon } from '../classes/Coupon';


@Injectable()
export class CustomersService {

  constructor(private http:Http) { }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

  buyCoupon(coupon: Coupon) {
    var self = this;
    return self.http.post("./buycoupon", coupon)
      .catch(this.handleError)
  }

  getAllPurchasedCoupons() {
    var self = this;
    return self.http.get("./getallpurchasedcoupons")
    .map((res) => res.json())
      .catch(this.handleError)
  }

  getAllPurchasedCouponsByType(type:CouponType) {
    var self = this;
    return self.http.get("./getallpurchasedcouponstype/" + type)
    .map((res) => res.json())
      .catch(this.handleError)
  }

  getAllPurchasedCouponsByPrice(price:number) {
    var self = this;
    return self.http.get("./getallpurchasedcouponsprice/" + price)
    .map((res) => res.json())
      .catch(this.handleError)
  }

    getAllCoupons() {
    var self = this;
    return self.http.get("./getallcouponstobuy")
      .map((res) => res.json())
      .catch(this.handleError)
  }

  logout(){
    var self = this;
    return self.http.get('./customerlogout')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getUserName(){
    return this.http.get('./getcustomername')
      .map((res) => res.text())
      .catch(this.handleError);
  }
}
