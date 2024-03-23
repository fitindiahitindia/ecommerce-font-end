import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent {
  allProduct:any=[];
  
  constructor(private _product:ProductService){}
  getAllBlogs(){
    this._product.get_blog().subscribe((res:any)=>{
      this.allProduct = res.data;
    })
  }
  removeProduct(item:any){

  }
  ngOnInit(){
    this.getAllBlogs();
  }
}
