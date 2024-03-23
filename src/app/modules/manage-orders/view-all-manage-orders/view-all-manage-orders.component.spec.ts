import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllManageOrdersComponent } from './view-all-manage-orders.component';

describe('ViewAllManageOrdersComponent', () => {
  let component: ViewAllManageOrdersComponent;
  let fixture: ComponentFixture<ViewAllManageOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllManageOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
