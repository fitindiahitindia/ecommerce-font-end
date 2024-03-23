import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, review } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(private activeRoute:ActivatedRoute,private _product:ProductService){}
  getProductByIdVar:any=[];
  proQuan:number = 1;
  isLoading:boolean=false;
  isStatus:boolean=true;
  isCartSuccess:boolean=false;
  math=Math
  isProductLoader:boolean=true;
  getProductRouterId:any=""
  productDetail={
    "_id":"",
    "pId":"",
    "name":"",
    "type":"",
    "image":"",
    "quantity":"",
    "price":0,
    "oldPrice":0,
    "noItems":1,
    "discount":0
  }
  product_Quantity='100g'
 getRouteId(){
    const productId= this.activeRoute.snapshot.paramMap.get('id');
    this.getProductRouterId = productId;
    return productId;
  }
  getProduct():void{
   
  } 
  getSingleProduct(){
    let getId=this.getRouteId();
    this._product.get_SingleProduct(getId).subscribe((res:any)=>{
      this.isProductLoader=false;
      this.getProductByIdVar=res.data;
      this.productDetail._id=this.getProductByIdVar._id
      this.productDetail.pId=this.getProductByIdVar.pId
      this.productDetail.name=this.getProductByIdVar.name
      this.productDetail.type=this.getProductByIdVar.type
      this.productDetail.image=this.getProductByIdVar.image
      this.productDetail.price=this.getProductByIdVar.price
      this.productDetail.quantity=this.getProductByIdVar.quantity
      this.productDetail.oldPrice=this.getProductByIdVar.oldPrice
      this.productDetail.discount=this.getDiscount()
    });
  }
  changeVarity(varity:number){
    let produtVarity;
    produtVarity=this.getProductByIdVar.p_u[varity];

    this.productDetail.quantity=produtVarity.quan;
    this.productDetail.price=produtVarity.price;
    this.productDetail.oldPrice=produtVarity.oldPrice;
  }
  
  addToCart(){
   this.isLoading=true;
   this.isCartSuccess=true;
   this._product.localCart(this.productDetail);
   this.isLoading=false;
   setTimeout(() => {
     this.isCartSuccess=false;
    
   }, 3000);
  }

  // increase and decrease quantity
  manageQuan(arg:string){
    if(arg=='plus'){
     this.proQuan++;
    }else if(arg=='minus' && this.proQuan > 1){
     this.proQuan--;
    }
  }

  getDiscount(){
    let discount=( this.productDetail.oldPrice -  this.productDetail.price) /  this.productDetail.oldPrice;
    this.productDetail.discount = discount*100;
    return discount * 100; 
  }
  
 
 isReviewMsg:boolean = false;
 rattingArr:number[]=[1,2,3,4,5];
 reviewMessage:string="";
 submitReview(values:review){
  const reviewObj:review={
    productId:this.getRouteId(),
    name:values.name,
    email:values.email,
    phone:values.phone,
    ratting:values.ratting,
    rattingMsg:values.rattingMsg,
  }
  this._product.setReview(reviewObj).subscribe((res:any)=>{
    this.reviewMessage=res.message;
    this.isReviewMsg=true;
    setTimeout(() => {
      this.isReviewMsg=false;
    }, 4000);
  },(error)=>{this.reviewMessage=error.error;})
  
 }


  ngOnInit(){
   this.getRouteId()
   this.getSingleProduct();
   this.getDiscount();
  } 
}
