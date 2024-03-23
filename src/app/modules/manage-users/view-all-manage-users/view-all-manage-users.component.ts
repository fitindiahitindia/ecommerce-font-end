import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-all-manage-users',
  templateUrl: './view-all-manage-users.component.html',
  styleUrls: ['./view-all-manage-users.component.css']
})
export class ViewAllManageUsersComponent {
  constructor(private _product:ProductService){}
  allUsers:any[] = [];
  isLoader:boolean=true;
  getAllOrders(){
    this._product.get_AllUserProfile().subscribe((res:any)=>{
      this.allUsers = res.data;
      this.isLoader=false
    })
  }
  onUserStatusChange(id:any,status:any){
     status = !status
     this._product.update_UserStatus(id,status).subscribe((res:any)=>{
      this.getAllOrders();
    })
  }
 
ngOnInit(){
  this.getAllOrders();
  
}
}
