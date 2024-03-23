import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent {
 constructor(private _product:ProductService){}

 ispopupStatus:boolean=false;
 popupMsg="";
 isError:boolean=false ;
 isErrorMsg=""
 adminPassword = {
  oldpassword:"",
  newpassword:"",
  confirmpassword:"",
}
adminProfile = {
  name:"",
  email:"",
  date:""
}
onChangePassword(psw:any){
  this.adminPassword.oldpassword = btoa(psw.oldpassword+`_${Date.now()}`);
  this.adminPassword.newpassword = btoa(psw.newpassword+`_${Date.now()}`);
  this.adminPassword.confirmpassword = btoa(psw.confirmpassword+`_${Date.now()}`);
  this._product.update_AdminPsw(this.adminPassword).subscribe((res:any)=>{
    this.popupMsg=res.message
    if(res.status=="failed"){
      this.isError = true;
      this.isErrorMsg=res.message
    }else{
    this.ispopupStatus=true
    this.isError=false;
    setTimeout(() => {
      this.ispopupStatus =false;
      this.adminPassword.oldpassword="";
      this.adminPassword.newpassword="";
      this.adminPassword.confirmpassword="";
    }, 3000);}
  },(err)=>{
    this.isError = true;
    this.isErrorMsg=err.err
  })
}
getAdminProfile(){
  this._product.get_AdminProfile().subscribe((res:any)=>{
    this.adminProfile.name = res.data.name
    this.adminProfile.email = res.data.email
    this.adminProfile.date = res.data.date
  })
}

ngOnInit(){
  this.getAdminProfile()
}

}
