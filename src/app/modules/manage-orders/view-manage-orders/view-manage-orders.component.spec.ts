import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManageOrdersComponent } from './view-manage-orders.component';

describe('ViewManageOrdersComponent', () => {
  let component: ViewManageOrdersComponent;
  let fixture: ComponentFixture<ViewManageOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewManageOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
