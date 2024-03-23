import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent{
 constructor(private _product:ProductService,private _router:Router){}
 orderId:string=""
 isOrderEmpty:boolean=false;
 isEmptyOrderStatus(){
  const cartLength=this._product.getCartLength();
  if(this.orderId==""){
    this._router.navigate(["/"])
  }
}
getOrderIdLocal(){
  this.orderId =  this._product.getLocalUserDetail("orderId")
}
 ngOnInit(){
   this.getOrderIdLocal();
   this.isEmptyOrderStatus();
 }
 
 
}
