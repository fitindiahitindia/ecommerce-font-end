import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input('dialogData') dialogInput: any
  constructor(public _dialog:DialogService){}
  close(){
    this._dialog.showDialog = false
  }
  ngOnInit(){
    const get  = document.getElementById('content');
    if(get !==null){

      get.innerHTML=this.dialogInput;

    }
  }

}
