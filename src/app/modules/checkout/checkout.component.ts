import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { commonError } from 'src/app/common-error';
import { Product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:any=[];
  totalPrice:number=0;
  cartItems:number=0;
  defaultState:string="Delhi";
  defaultCountry:string="India";
  productQuantity:number=0;
  orderItems:any[]=[];
  userId:any;
  country:any=[]
  state:any=[]
  stateLoader:boolean=false;
  countryLoader:boolean = true;

  constructor(private _product:ProductService,private _router:Router){}
  checkout(checkoutForm:{phone:number,address1:string,address2:string,country:string,state:string,city:string,pincode:number})
  {
    let orderData = {
      orderItems:this.orderItems,
      shippingAddress1 :checkoutForm.address1,
      shippingAddress2 :checkoutForm.address2,
      city: checkoutForm.city,
      zip:checkoutForm.pincode,
      state:checkoutForm.state,
      country:checkoutForm.country,
      phone:checkoutForm.phone,
      user:this.userId,
      totalPrice:this.totalPrice
    }
    
    this._product.setProductInCheckout(orderData);
    
    this._router.navigate(['order-payment'])
   
  }
  
  getLocalCart(){
     let filter=[];
     const cart=this._product.getLocalCart()
     for(let i=0;i<cart.length;i++){
      filter.push({
        product:cart[i]._id,
        quantity:cart[i].noItems
      })
     }
    this.cart = cart;
    this.orderItems = filter;
  }
  getCartLength(){
    this.cartItems=this._product.getCartLength()
  }
  getTotalPrice(){
    this.totalPrice=this._product.getTotalPrice()
  }
  getProductQuantity(){
    this.productQuantity=this._product.getProductQuantity()
  }
  
  isEmptyCheckout(){
    const cartLength=this._product.getCartLength();
    if(cartLength==0){
      this._router.navigate(["/"])
    }

  }
  getUserProfile(){
   this.userId= this._product.getLocalUserDetail("userProfile");
  }
  changeCountry(val:any){
    this.stateLoader = true;
    this.getState(val.target.value)
  }
  getCountry(){
    this._product.get_Country().subscribe((res:any)=>{
      this.country = res.data
      this.countryLoader = false;
    },(error)=>{
      const cerror = new commonError().server();
      alert(cerror)
    })
  }
  getState(country:string){
    this._product.get_State(country).subscribe((res:any)=>{
      this.state = res.data;
      this.stateLoader = false;
    },(error)=>{
      this.stateLoader = true;
      if(this.state.length <=0){
        setTimeout(()=>this.getState(country),500)
      }
    })
  }
  ngOnInit(){
    this.isEmptyCheckout();
    this.getUserProfile();
    this.getLocalCart();
    this.getCartLength();
    this.getTotalPrice();
    this.getProductQuantity();
    this.getCountry();
  }
  


}
