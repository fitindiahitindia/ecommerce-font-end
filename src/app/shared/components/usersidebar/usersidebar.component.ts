import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent {
  constructor(private _product:ProductService){}
  username:string=""

  getUserName(){
     this._product.get_profile().subscribe((res:any)=>{
      this.username = res.data.name
     });
  }
  ngOnInit(){
    this.getUserName();
  }
}
