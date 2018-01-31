import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchasedCouponsComponent } from './get-purchased-coupons.component';

describe('GetPurchasedCouponsComponent', () => {
  let component: GetPurchasedCouponsComponent;
  let fixture: ComponentFixture<GetPurchasedCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPurchasedCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPurchasedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
