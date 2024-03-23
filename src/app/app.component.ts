import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { ProductService } from './services/product.service';
import { Chart } from 'chart.js/auto';
declare var window: any
export interface Tile{
  color:string;
  text:string;
  cols:number;
  rows:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';

  sideBarOpen = true;
  constructor(private _product:ProductService){}
  reloadUser(){
    this._product.reloadUser();
  }
  openFormModal(){
    this.formModal.show();
  }
  formModal:any;
  ngOnInit(){
    //========== for modal ===============
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );

      }


  
}
