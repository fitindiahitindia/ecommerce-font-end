import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sideBarOpen:boolean=false;
  constructor(private _product:ProductService){}
  ngOnInit(){
    // alert()
    // this._product.reloadUser();
  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
      datasets: [{
        label: '# Orders',
        data: [12,19,3,5,2,3,45,78,12,54,66,100],
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  new Chart("myChart2", {
    type: 'bar',
    data: {
      labels: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
      datasets: [{
        label: '# Orders',
        data: [12,19,3,5,2,3,45,78,12,54,66,100],
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  }
}
