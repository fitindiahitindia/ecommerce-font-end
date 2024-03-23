import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  getProductData:any=[]; 
  selectedValue:any;
  productIdParms:any;
  isError:boolean=false;
  isSuccess:boolean=false;
  constructor(private _product:ProductService,private _activatedRoute:ActivatedRoute){}
  getProduct(){
    this.productIdParms= this._activatedRoute.snapshot.paramMap.get('id');
    this.productIdParms && this._product.get_SingleProduct(this.productIdParms).subscribe((res:any)=>{
      this.getProductData = res.data;
      this.selectedValue = res.data.type;
    })
  }
  editProduct(data:any){
    const abc={
      ...data,
      type:this.selectedValue
    }
    this._product.update_SingleProduct(this.productIdParms,abc).subscribe((res:any)=>{
      console.log("success update")
      console.log(abc)
      this.isSuccess=true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 3000);
    },(error)=>{
      this.isError = error.error;
    })

  }
  productType(event:any){
    this.selectedValue=event.target.value
  }
  ngOnInit(){
    this.getProduct();
  }
}
