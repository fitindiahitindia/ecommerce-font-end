import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  constructor(private _product: ProductService, private _router: Router) {}

  isLogin: boolean = false;
  errorStatus: string = '';
  loginObj = {
    email: '',
    password: '',
  };
  adminLogin(loginForm:any) {
    this.loginObj.email = loginForm.email;
    // this.loginObj.password = btoa(loginForm.password+`_${Date.now()}`);
    this.loginObj.password = loginForm.password;
    this._product.login_admin(this.loginObj).subscribe(
      (res: any) => {
        if (res.status == 'success') {
          this._product.setAdminLoginToken(res.data);
          this.errorStatus = '';
          this.isLogin = true;
          this._product.isAdminLoggedIn.next(true);
          this.registerObjectEmpty();

          setTimeout(() => {
            this.isLogin = false;
            const isCheckout=localStorage.getItem("adminlogintoken");
            if(isCheckout){
            this._router.navigate(['/', 'admin-dashboard']);
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
