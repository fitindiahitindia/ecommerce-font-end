import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy{
  ngOnDestroy(): void {
    localStorage.removeItem("checkout");
 }
}
