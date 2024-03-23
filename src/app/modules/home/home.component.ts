import { Component,OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Product} from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _product:ProductService){}
  isProductLoader:boolean=true;
  getAllProduct:Product[]=[];
  category:any[]=[];
  isCategory:string='almond';
  productById:Product[]=[];
  selectValue:number=0;
  discount:number[]=[];
  math=Math;
  mobileApierror="";
  blogs:any;

  getProduct(){
  this._product.get_product().subscribe(async(res)=>{
    this.isProductLoader=false;
    this.getAllProduct=await res.data;
  },(error)=>{
    console.log(error)
  })
  }
  onChangeUnit(arg:any){
   this.selectValue=arg.value;
  }
  getProductById(id:string){
   let cat=[];
   for(let i=0;i<this.getAllProduct.length;i++){
    if(this.getAllProduct[i].type==id){
       cat.push(this.getAllProduct[i]);
    }
   }
   this.productById=cat;
  }
  selectByCategory(category:string){
   this.isCategory=category;
   this.getProductById(this.isCategory)
   this.getDiscount();
  }
  
  addToCart(item:Product){
    // this._product.localCart(item);
  }
  getDiscount(){
    let discount=this.productById.map((value:Product)=>{
      let dis=(value.oldPrice - value.price) / value.oldPrice;
      return dis * 100; 
    })
    this.discount = discount;
    return discount;
  }
  getBlogs(){
    this._product.get_blog().subscribe(async(res:any)=>{
      this.isProductLoader=false;
      this.blogs=await res.data;
    },(error)=>{
      console.log(error)
    })
  }
  itemCategory:any[]=[];
  getCategory(){
    this._product.get_Categroy().subscribe((res:any)=>{
      this.itemCategory = res.data;
    })
  }
  ngOnInit(){
    this.getProduct();
    this.selectByCategory(this.isCategory);
    this.getBlogs();
    this.getCategory();
  }
  
  ngDoCheck(){
    this.selectByCategory(this.isCategory)
  }
  }
