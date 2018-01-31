import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcustomersComponent } from './getallcustomers.component';

describe('GetallcustomersComponent', () => {
  let component: GetallcustomersComponent;
  let fixture: ComponentFixture<GetallcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
