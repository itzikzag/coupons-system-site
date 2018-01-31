import { Component, OnInit } from '@angular/core';
import { CompanysService } from '../../services/companys.service';
import { Coupon } from '../../classes/Coupon';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  constructor(private service:CompanysService) { }
  coupon:Coupon = new Coupon();
  
  ngOnInit() {
  }

  createCoupon(){
    var self = this;
  self.service.createCoupon(self.coupon).subscribe(
  
  (sucess)=>{
    alert('coupon created successfully!')
  },
  (error)=>{
    alert('error occured while trying to create a new coupon! pls check if coupon with the same name already exist')
  }
  
  );
  
  }
}
