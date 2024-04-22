import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private _product: ProductService,private _router:Router) {}
  cart: any = [];
  cartItems: number = 0;
  productQuantity:number=0;
  totalPrice: number = 0;
  isRemoveCart:boolean=false;
  isLogin:boolean=false;
  singleProductQuan:number[]=[];
  getLocalCart(){
    this.cart=this._product.getLocalCart()
  }
  getCartLength(){
    this.cartItems=this._product.getCartLength()
  }
  getProductQuantity(){
    this.productQuantity=this._product.getProductQuantity()
  }
  getTotalPrice(){
    this.totalPrice=this._product.getTotalPrice()
  }
  
  setLocalCart(data: any) {
    localStorage.setItem('cartItem', JSON.stringify(data));
  }
  removeCart(id:any) {
    this._product.removeCart(id);
    this.isRemoveCart=true;
    setTimeout(() => {
      this.isRemoveCart=false;
    }, 3000);
    
    this.getLocalCart();
    this.getCartLength();
    this.getTotalPrice();
    this.getProductQuantity();
    this.getSingleQuantity();
  }
  getLoginStatus(){
    if(localStorage.getItem("userlogintoken")){
      this.isLogin=true
    }
  }
  setCheckout(){
    localStorage.setItem("checkout",JSON.stringify({val:true}))
  }
  getQuantity(item:any,sign:string){
    this._product.setLocalCart(item,sign);
    this.getLocalCart();
    this.getCartLength();
    this.getTotalPrice();
    this.getProductQuantity();
    this.getSingleQuantity();
  }
  getSingleQuantity(){
    this.singleProductQuan=this._product.getSingleProductQuantity();
  }
  ngOnInit() {
    if(localStorage.getItem('cartItem')?.length==null){
      this._router.navigate(['/'])
    }
    this.getLocalCart();
    this.getCartLength();
    this.getTotalPrice();
    this.getSingleQuantity()
    this.getProductQuantity();
    this.getLoginStatus();
  }
 
}
