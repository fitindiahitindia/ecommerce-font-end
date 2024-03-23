import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }
