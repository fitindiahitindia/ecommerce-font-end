import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

interface UserRegister{
  name:string,
  email:string,
  password:string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _product:ProductService,private _router:Router){}
  isRegister:boolean=false;
  errorStatus:string="";
  registerObj:UserRegister={
    name:"",
    email:"",
    password:""
  }
  createUserAccount(registerUser:UserRegister){
    
   this.registerObj.name = registerUser.name;
   this.registerObj.email = registerUser.email;
   this.registerObj.password = btoa(registerUser.password+`_${Date.now()}`);

   this._product.register_user(this.registerObj).subscribe((res:any)=>{
    this.errorStatus="";
    this.isRegister=true;
    this.registerObjectEmpty();  
   setTimeout(() => {
    this.isRegister=false;
    
    this._router.navigate(['/','auth'])
  }, 3000);
   },(error)=>{
     this.errorStatus=error.error.message
   })
   
  }

  registerObjectEmpty(){
    this.registerObj.name ="";
    this.registerObj.email ="";
    this.registerObj.password ="";
  }
}
