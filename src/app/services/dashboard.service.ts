import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:5000";

  createCourse(formData:any){
   this.http.post<any>(this.url+'/api/v1/programs',formData);
  }

}
