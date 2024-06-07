import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { ProductService } from './services/product.service';
import { Chart } from 'chart.js/auto';
import { DialogService } from './services/dialog.service';
declare var window: any
export interface Tile{
  color:string;
  text:string;
  cols:number;
  rows:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  mydata='<input type="text" />';
  sideBarOpen = true;
  constructor(private _product:ProductService, public _dialog:DialogService){}
  reloadUser(){
    this._product.reloadUser();
  }
  openFormModal(){
    this.formModal.show();
  }
  formModal:any;
  str1:any;
  str2:any;
  stack:any= []
  currentSize = this.stack.length;
  getWord(event:any){
   this.push(event.target.className)  
  }
  push(newVal:any){
  this.search(newVal) 
  }
  search(newVal:any){
   
        this.stack[this.currentSize]=newVal;
      
  }
  ngOnInit(){
    //========== for modal ===============
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('myModal')
    // );
    
    const str = "Atishi said, I want to tell the BJP that you can arrest Arvind Kejriwal, you can put him in jail, but you cannot imprison the love and responsibility he has for the people of Delhi. You cannot confine his dedication towards the people of Delhi.";
    const str1 = str.split(" ")
    this.str1 = str1
    this.str2 = str1.join(" ")
    for(let i=0;i<str1.length;i++){
      // Create an "li" node:
      const node = document.createElement( "span");
      const att = document.createAttribute("class");
      // Create a text node:
      const textnode = document.createTextNode(str1[i]);
      // att.value=i;
      
      // Append the text node to the "li" node:
      node.appendChild(textnode);
      
      // Append the "li" node to the list:
      // window.document.getElementById("main").appendChild(node);
      }
   
  }


  
}
