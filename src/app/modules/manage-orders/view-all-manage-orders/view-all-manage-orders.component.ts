import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-all-manage-orders',
  templateUrl: './view-all-manage-orders.component.html',
  styleUrls: ['./view-all-manage-orders.component.css']
})
export class ViewAllManageOrdersComponent {
  allOrders:any[] = [];
  isLoader:boolean = true
  // orderStatus:string = "COMPLETE"
  constructor(private _product:ProductService){}  
  getAllOrders(){
      
      this._product.get_AllUserOrders().subscribe((res:any)=>{
        this.allOrders = res.data;
        this.isLoader=false
      })
    }
   
  ngOnInit(){
    this.getAllOrders();
    
  }
}
