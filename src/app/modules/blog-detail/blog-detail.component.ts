import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  constructor(private _product:ProductService,private Router:Router,private activateRoute:ActivatedRoute){}
    blogID:any;
    blogDetailObj:any={
    id:"",
    title:"",
    category:"",
    content:"",
    image:""
  }
  getRouteId(){
    const blogId= this.activateRoute.snapshot.paramMap.get('id');
    this.blogID = blogId;
  }
  getBlogById(){
   this.Router.url
   this._product.get_blogById(this.blogID).subscribe((res:any)=>{
    this.blogDetailObj.id = res.data.id;
    this.blogDetailObj.title = res.data.title;
    this.blogDetailObj.content = res.data.content;
    this.blogDetailObj.category = res.data.category;
    this.blogDetailObj.image = res.data.image;
   })
  }
  ngOnInit(){
    this.getRouteId()
    this.getBlogById();
  }
}
