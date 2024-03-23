import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
export interface PeriodicElement {
  name: string;
  position: number;
  duration: number;
  action:string;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private _product:ProductService){}
  allProduct:any=[];
  isLoader:boolean=false;
  getAllProduct(){
    this.isLoader=true;
    this._product.get_product().subscribe((res:any)=>{
    this.allProduct=res.data;
    this.isLoader=false;
    })
  }

  removeProduct(id:string){
    let removeConfirm=confirm("Are you sure delete product");
    if(removeConfirm==true){
    this.isLoader=true;
    this._product.removeSingleProduct(id).subscribe((res:any)=>{
      this.getAllProduct()
      this.isLoader=false;
    },(error:Response)=>{
      if(error.status===404){
        alert("This product has already deleted.")
      }else{
        alert("An unexpected error occurred.")
      }
    })
    }   
  }
  ngOnInit(){
    this.getAllProduct();
  }
 
}
