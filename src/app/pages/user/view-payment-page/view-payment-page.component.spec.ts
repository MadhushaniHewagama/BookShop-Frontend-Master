import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentPageComponent } from './view-payment-page.component';

describe('ViewPaymentPageComponent', () => {
  let component: ViewPaymentPageComponent;
  let fixture: ComponentFixture<ViewPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
