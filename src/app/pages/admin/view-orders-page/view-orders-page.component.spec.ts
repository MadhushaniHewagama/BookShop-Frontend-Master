import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersPageComponent } from './view-orders-page.component';

describe('ViewOrdersPageComponent', () => {
  let component: ViewOrdersPageComponent;
  let fixture: ComponentFixture<ViewOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
