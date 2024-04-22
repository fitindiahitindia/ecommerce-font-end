import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-blogs',
  templateUrl: './category-blogs.component.html',
  styleUrls: ['./category-blogs.component.css']
})
export class CategoryBlogsComponent {

  constructor(private _product: ProductService){}
  isSuccess:boolean = false;
  productCategory:any[] = []
  message=""
  isUpdate:boolean = false;
  categoryName=""
  editId=""
  categoryObj:any = {
    categoryName:"" || null,
  }
  onCategory(category:NgForm){
    this.createCategory(category)
    category.resetForm()
  }
  createCategory(category:any){
    // let formParmas = new FormData();
    // formParmas.append('file',this.file);
    // console.log(formParmas)
    this._product.create_blog_category(category).subscribe((res:any)=>{
      this.isSuccess = true;
      this.message = "Category Add Successfully"
      this.getCategory()
      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);
      })
  }
  getCategory(){
    this._product.get_blog_category().subscribe((res:any)=>{
      this.productCategory = res.data
    })
  } 
  updateCategory(){
   this._product.edit_Category(this.editId,this.categoryObj).subscribe((res:any)=>{
    this.isSuccess = true;
    this.message = "Category Update Successfully"
    this.isUpdate = false;
    this.categoryObj.categoryName = null;
    this.getCategory()
      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);
   })
  }
  remove(id:string){
    const confirm=window.confirm("Are you sure delete this category")
    if(confirm){
    this._product.remove_Category(id).subscribe((res:any)=>{
      this.isSuccess = true
      this.message = "Category Remove Successfully"
      this.getCategory()
      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);
    })}
  }

  edit(item:any){
    this.isUpdate = true
    this.categoryObj.categoryName = item.categoryName
    this.editId= item._id;
  }

  onUpdateCategory(){
    this.updateCategory()
  }

  file:any;

  onFilechange(event:any):any{
    if(event.target.files.length>0){
      const file = event.target.files[0]
      const formData  = new FormData();
      formData.append("category_file",file);
      formData.append("categoryName",this.categoryObj.categoryName);
      this.file = formData;
      // this._product.upload(formData).subscribe((res:any)=>{
      //   if(res){
      //     alert("image upload successfully")
      //   }
      // },error=>{alert(error.error)})
    }
  }
  upload(){
    // this._product.upload(this.file).subscribe((res:any)=>{
    //   console.log(res)
    // })
  }

  ngOnInit(){
   this.getCategory();
  }
}
