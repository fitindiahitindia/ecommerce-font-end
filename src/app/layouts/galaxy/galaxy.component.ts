import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent {
  constructor(private _product:ProductService,private Router:Router){}
  sideBarOpen=true;
  sidebar(){
    if(window.innerWidth > 768){
      this.sideBarOpen = true;
    }else{
      this.sideBarOpen=false;
      
    }
  }
  async logout(){
   await this._product.removeUserLoginToken("userlogintoken");
   const isToken =await this._product.getUserLoginToken();
   await localStorage.removeItem("checkout");
   await localStorage.removeItem("userProfile");
   await localStorage.removeItem("orderId");
    if(isToken==null){
      this.Router.navigate(["/"])
    }
  }


  ngOnInit(){
    this.sidebar();
  }
}
