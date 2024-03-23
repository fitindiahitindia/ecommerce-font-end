import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent {
  category:any=[]
  isShowCategory:boolean=false;
  minValue:number=0;
  maxValue:number=1000;
  val:number=0;
  dataFilter:any;
  dataQuantity:any;
  categorywise_var:any="all";
  sortByFilter_var:any="all";

  constructor(private _product:ProductService, private _activeRoute:ActivatedRoute){}

  getProduct(){
   this._product.get_product().subscribe((res:any)=>{
    this.category = res.data;
   })
  }
  showCategory(){
   this.isShowCategory =!this.isShowCategory;
  }
 
  categoryWiseFilter(value:any){
    this.categorywise_var=value.value.toLowerCase();
  }
  sortByFilter(value:any){
    this.sortByFilter_var=value.value.toLowerCase();
  }
  clearFilter(){
    this.categorywise_var=null;
  }
  gettype(){
    let catType=[];
    for(let i=0;i<this.category.length;i++){
      catType.push(this.category[i].type);
    }
    let unquie = catType.filter((item:any,i:any,catType:any)=>{return catType.indexOf(item)==i});
    return unquie;
  }
  getquantity(){
    let quan=[];
    for(let i=0;i<this.category.length;i++){
      quan.push(this.category[i].quantity);
    }
    let quantity = quan.filter((item:any,i:any,quan:any)=>{return quan.indexOf(item)==i});
     return quantity;
  }
  
  public search_var:string = "";
  ngOnInit(){
    this.getProduct();
    this.dataFilter=this.gettype();
    this.dataQuantity = this.getquantity();
    
    //search feature
    this._activeRoute.queryParams.subscribe((res:any)=>{
      const searchQuery = res["search"];
      if(searchQuery !== undefined){
        this.search_var = searchQuery
      }
    })
  }
  ngDoCheck(){
    this.dataFilter=this.gettype();
    this.dataQuantity = this.getquantity();
  }
}
