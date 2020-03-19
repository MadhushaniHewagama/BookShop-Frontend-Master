import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookPageComponent } from './edit-book-page.component';

describe('EditBookPageComponent', () => {
  let component: EditBookPageComponent;
  let fixture: ComponentFixture<EditBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
