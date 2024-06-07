import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SliderComponent } from './components/slider/slider.component';
import { ProductComponent } from './components/product/product.component';
import { LoaderComponent } from './widgets/loader/loader.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { UsersettingComponent } from './components/usersetting/usersetting.component';
import { RandomColorGeneratorComponent } from './widgets/random-color-generator/random-color-generator.component';
import { TodoComponent } from './components/todo/todo.component';
import { DialogComponent } from './widgets/dialog/dialog.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    WidgetsComponent,
    FooterComponent,
    SliderComponent,
    LoaderComponent,
    NotfoundComponent,
    HeaderComponent,
    UsersidebarComponent,
    UsersettingComponent,
    RandomColorGeneratorComponent,
    TodoComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports:[
    FooterComponent
  ]
})
export class SharedModule { }
