import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManageUsersComponent } from './view-manage-users.component';

describe('ViewManageUsersComponent', () => {
  let component: ViewManageUsersComponent;
  let fixture: ComponentFixture<ViewManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewManageUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
