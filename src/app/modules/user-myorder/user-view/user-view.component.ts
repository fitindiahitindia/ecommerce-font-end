import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  constructor(private _product:ProductService){
  }
  allProduct:any=[];
  isLoader:boolean=false;
  isOrder:boolean=false;
  getOrders(){
    this.isLoader=true;
    this._product.get_UserOrders().subscribe((res:any)=>{
      this.allProduct = res.data;
      this.isLoader=false;    
    })   
  }
  // getAllProduct(){
  //   this.isLoader=true;
  //   this._product.get_product().subscribe((res:any)=>{
  //   this.allProduct=res.data;
  //   this.isLoader=false;
  //   })
  // }

  removeProduct(id:string){
    let removeConfirm=confirm("Are you sure delete product");
    if(removeConfirm==true){
    this.isLoader=true;
    this._product.removeSingleProduct(id).subscribe((res:any)=>{
      this.getOrders()
      this.isLoader=false;
    })
    }   
  }
  ngOnInit(){
    this.getOrders();
  }

}
