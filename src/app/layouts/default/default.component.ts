import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  constructor(private _product:ProductService,private Router:Router){
  }
  sideBarOpen=true;
  isDark(){
    document.body.classList.add("abcd")
  }
  async logout(){
   if(this.Router.url.slice(1,6) == "user"){
    await this._product.removeUserLoginToken("userlogintoken");
   const isToken =await this._product.getUserLoginToken();
   await localStorage.removeItem("checkout");
   await localStorage.removeItem("userProfile");
    if(isToken==null){
      this.Router.navigate(["/"])
      this._product.refresh();
    }
   }else{
    await this._product.removeUserLoginToken("adminlogintoken");
    const isToken =await this._product.getAdminLoginToken();
     if(isToken==null){
       this.Router.navigate(["/"])
       this._product.refresh();
     }
   }
   
  }
  sidebar(){
    if(window.innerWidth > 768){
      this.sideBarOpen = true;
    }else{
      this.sideBarOpen=false;
      
    }
  }
  ngOnInit(){
    this.sidebar();
  }
}
