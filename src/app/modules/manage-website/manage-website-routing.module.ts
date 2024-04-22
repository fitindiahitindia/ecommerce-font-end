import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlog2Component } from './add-blog2/add-blog2.component';
console.log("routing website is model loading")
const routes: Routes = [
  {path:"", component:AddBlog2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWebsiteRoutingModule { }
