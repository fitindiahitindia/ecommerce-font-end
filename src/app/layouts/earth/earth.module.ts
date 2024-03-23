import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthComponent } from './earth.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [
    EarthComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class EarthModule { }
