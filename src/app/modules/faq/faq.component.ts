import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent{
  panelOpenState = false;
  private isLoading = new BehaviorSubject<boolean>(false);

  isLoadingComp:boolean=true;
  
  checkIsLoading(){
    this.isLoading.next(false)
    console.log(this.isLoading);
  }

  ngOnInit(){
  }
  ngAfterViewInit(){
    this.isLoadingComp=!this.isLoadingComp
  }
}
