import { Component } from '@angular/core';
import { contact } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 constructor(private _contact:ProductService){}
 isStatus:boolean=false;
 contactObj:contact={
  name:"",
  email:"",
  message:"",
 }
 contactMessage:string=""
 submitContact(){
  this._contact.submitContact(this.contactObj).subscribe((res:any)=>{
   this.contactMessage = res.message
  })
  this.isStatus=true;
  setTimeout(() => {
    this.isStatus=false;
    //empty
    this.contactObj.name = "";
    this.contactObj.email = "";
    this.contactObj.message = "";

  }, 4000);
 }
}
