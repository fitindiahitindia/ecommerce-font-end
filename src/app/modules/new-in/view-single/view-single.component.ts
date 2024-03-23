import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-single',
  templateUrl: './view-single.component.html',
  styleUrls: ['./view-single.component.css']
})
export class ViewSingleComponent {
  constructor(private _product:ProductService,private _activatedRoute:ActivatedRoute){

  }
isCreatePro:boolean=false;
getAllProduct:any=[];
dataFilter:any;
productIdParms:any;
viewPro={
  "name":"",
  "quantity":"",
  "description":"",
  "type":"",
  "image":"",
  "price":0,
  "oldPrice":0,
 
}

getProductType(){
  this.productIdParms= this._activatedRoute.snapshot.paramMap.get('id');
  this._product.get_SingleProduct(this.productIdParms).subscribe((res:any)=>{
   this.viewPro.name=res.data.name;
   this.viewPro.description=res.data.description;
   this.viewPro.quantity=res.data.quantity;
   this.viewPro.type=res.data.type;
   this.viewPro.image=res.data.image;
   this.viewPro.price=res.data.price;
   this.viewPro.oldPrice=res.data.oldPrice;
  })
}


ngOnInit(){
   this.getProductType(); 
}

}
