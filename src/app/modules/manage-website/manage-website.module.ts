import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageWebsiteRoutingModule } from './manage-website-routing.module';
import { AddBlog2Component } from './add-blog2/add-blog2.component';

console.log("module manage website is loaded")
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ManageWebsiteRoutingModule
  ]
})
export class ManageWebsiteModule { }
