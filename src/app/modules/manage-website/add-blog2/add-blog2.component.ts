import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-blog2',
  templateUrl: './add-blog2.component.html',
  styleUrls: ['./add-blog2.component.css']
})
export class AddBlog2Component {
  constructor(private _product:ProductService){console.log("blog added is loaded")}
  editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'no',
      enableToolbar: true,
      showToolbar: true,
      defaultParagraphSeparator: 'p',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
};
createBlogObj:any={
  title:"",
  category:"",
  content:"",
  image:"",
  date:Date.now()
}
createBlog(blog:NgForm){
 if(this.createBlogObj.content.length <=0){
  alert("contet editor should not be empty")
 }else{

   this._product.create_blog(this.createBlogObj).subscribe((res:any)=>{
    alert("success")
   })
 }
 
}
res='<h1>Heading</h1>'
}

