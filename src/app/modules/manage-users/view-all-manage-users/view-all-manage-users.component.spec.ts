import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllManageUsersComponent } from './view-all-manage-users.component';

describe('ViewAllManageUsersComponent', () => {
  let component: ViewAllManageUsersComponent;
  let fixture: ComponentFixture<ViewAllManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllManageUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
