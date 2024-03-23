import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private _product:ProductService){

  }

//   createCourseObj:any={
//   "name":"",
//   "description":"",
//   "duration":"",
//   "academicYear":""
//  }

//  saveCreateCourse(){
//   this.service.createCourse(this.createCourseObj);
//  }
isCreatePro:boolean=false;
getAllProduct:any=[];
dataFilter:any;
isError="";
category:any[] = [];
createPro={
  "name":"",
  "quantity":"",
  "description":"",
  "type":"",
  "image":"",
  "price":0,
  "oldPrice":0,
 
}
getCategoryHtm(val:any){
  this.createPro.type=val.value;
}
createProduct():void{
  console.log(this.createPro)
  this._product.createProduct(this.createPro).subscribe((res:any)=>{
    if(res.data){
    this.isCreatePro=true;
    setTimeout(() => {
      this.isCreatePro = false;
    }, 3000);

  }},(error)=>{
    this.isError=error.error.message
  })
   this.createProEmpty();
}

createProEmpty(){
  this.createPro.name=""
  this.createPro.quantity=""
  this.createPro.description=""
  this.createPro.type=""
  this.createPro.image=""
  this.createPro.price=0
  this.createPro.oldPrice=0
}

getProductType(){
  this._product.get_product().subscribe((res:any)=>{
   this.getAllProduct=res.data;
  })
}
getCategroy(){
  this._product.get_Categroy().subscribe((res:any)=>{
    this.category = res.data
  })
}
gettype(){
  let catType=[];
  for(let i=0;i<this.getAllProduct.length;i++){
    catType.push(this.getAllProduct[i].type);
  }
  let unquie = catType.filter((item:any,i:any,catType:any)=>{return catType.indexOf(item)==i});
  return unquie;
}


ngOnInit(){
   this.getProductType(); 
   this.dataFilter=this.gettype();
   this.getCategroy()
}
ngDoCheck(){
  this.dataFilter=this.gettype();
}

}
