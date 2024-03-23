import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _product:ProductService,private router:Router, private actroute:ActivatedRoute){}
  isActive:boolean=false;
  isShow:boolean=false;
  cartNumber:any=0
  isLogin:boolean=false;
  isAdminLogin:boolean = false;
  onSidebar(){
   this.isActive=!this.isActive;
  }
  isLoginUser(){
    const isToken=this._product.getUserLoginToken();
    if(isToken){ 
    this.isLogin = true
    }else{
      this.isLogin=false
    }
    
  }
  isAdminUser(){
    const isToken=this._product.getAdminLoginToken();
    if(isToken){ 
    this.isAdminLogin = true
    }else{
      this.isAdminLogin=false
    }
    
  }
  onSidebarMenu(){
    this.isShow=!this.isShow;
   }
  getCartLenghtLocal(){
    this.cartNumber=this._product.cartData.subscribe((item)=>{
      if(item == null){
      this.cartNumber=0;
      }else{
      this.cartNumber=item.length
      }
    })
  }
  
  clearLocalStorage(){
    this._product.clearLocalStorage();
  }

searchProduct(query:any){
  // if(query){
    //   const element = query.target as HTMLInputElement;
  //   this._product.search_product(element.value).subscribe((res:any)=>{
  //     res.data.filter((val:any,i:number)=>{
  //       console.log(val.name.toString())
  //     })
  //   })
  // }  
  this.router.navigate(
    ['/all-products'],
    {queryParams:{search:query.value}}
  )  
}


  ngOnInit(){
   this.isLoginUser();
   this.isAdminUser();
   this.getCartLenghtLocal();
   this._product.getProduct();
  }
}
