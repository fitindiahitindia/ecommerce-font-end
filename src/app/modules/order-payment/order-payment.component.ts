import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.css']
})
export class OrderPaymentComponent implements OnInit {
  constructor(private _router:Router,private _product:ProductService){}
  paymentMethod:string='cash-on-delivery';
  getCheckoutData:any;
  totalPrice:number=0;
  orderedSuccessfully:boolean=false;
  getPaymentMethod(paymentMethod:string){
    this.paymentMethod=paymentMethod;
  }
  getCheckout(){
    let getCheckoutDta=this._product.getLocalDataMyOrder();
    return getCheckoutDta;
    }
  placeOrder(){
    // let placeOrder = {
    //   myOrder:this.getCheckoutData,
    //   paymentMethod:this.paymentMethod
    // }
   const ordered= this._product.productInCheckout;
   this._product.create_Order(ordered).subscribe((res:any)=>{
      this.removeCart(ordered);
    this.orderedSuccessfully=true;
    this._product.setLocalUserDetail("orderId",res.data._id)
    setTimeout(() => {
      this.orderedSuccessfully=false;
      this._router.navigate(['order-status'])
    }, 1500);
   },(error)=>{
    console.log(error.error)
   })
   

    // let getDat = this._product.getLocalDataMyOrder();
    // let myOrderLength = Object.values(getDat)
    // this._product.create_Order().subscribe((res:any)=>{
    //   console.log("Order is successfully created")
    //   console.log(res)
    // })
    // if(myOrderLength[0].length !==0){
    // }
  }
  removeCart(data:any){
    let id:any= [];
   for(let i=0;i<data.orderItems.length;i++){

     id.push(data.orderItems[i].product);
   }
   for(let i=0;i<id.length;i++){
    this._product.removeCart(id[i]);
   }
  }
  getTotalPrice(){
    this.totalPrice=this._product.getTotalPrice()
  }
  isEmptyPayment(){
    const cartLength=this._product.getCartLength();
    if(cartLength==0){
      this._router.navigate(["/"])
    }

  }

  onLoadPaymentData(event:any){
    console.log("load payment data:", event.detail)
  }
  ngOnInit(){
    this.isEmptyPayment();
    this.getCheckoutData=this.getCheckout()
    this.getTotalPrice();
    
  }
}
