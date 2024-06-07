import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  constructor(private _product: ProductService, private _router: Router) {}
  
  isLogin: boolean = false;
  errorStatus: string = '';
  loginObj = {
    email: '',
    password: '',
  };
  userLogin(loginForm:any) {
    this.loginObj.email = loginForm.email;
    this.loginObj.password = btoa(loginForm.password+`_${Date.now()}`);
    // this.loginObj.password = loginForm.password;
    this._product.login_user(this.loginObj).subscribe(
      (res: any) => {
        if (res.status == 'success') {
          this._product.setUserLoginToken(res.data);
          this._product.get_profile().subscribe((res:any)=>{
            if(res){
              this._product.setLocalUserDetail("userProfile",res.data.id)
            }
          });
          this.errorStatus = '';
          this.isLogin = true;
          this._product.isUserLoggedIn.next(true);
          this.registerObjectEmpty();
          setTimeout(() => {
            this.isLogin = false;
            const isCheckout=localStorage.getItem("checkout");
            if(isCheckout){
            this._router.navigate(['/', 'checkout']);
            }else{
            this._router.navigate(['/', 'user-dashboard']);
            }
          }, 2000);
        } else {
          this.errorStatus = res.message;
        }
      },
      (error) => {
        this.errorStatus = error.error.message;
      }
    );
  }

  registerObjectEmpty() {
    this.loginObj.email = '';
    this.loginObj.password = '';
  }
}
