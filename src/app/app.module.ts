import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NewInComponent } from './modules/new-in/new-in.component';
import { ClothingComponent } from './modules/clothing/clothing.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { WidgetsComponent } from './shared/widgets/widgets.component';
import {MatTableModule} from '@angular/material/table';
import { AddComponent } from './modules/new-in/add/add.component';
import { ViewComponent } from './modules/new-in/view/view.component';
import { EarthComponent } from './layouts/earth/earth.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { ProductComponent } from './shared/components/product/product.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { FaqComponent } from './modules/faq/faq.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { OrderStatusComponent } from './modules/order-status/order-status.component';
import { CartComponent } from './modules/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { LoaderComponent } from './shared/widgets/loader/loader.component';
import { ProductService } from './services/product.service';
import { DashboardService } from './services/dashboard.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OrderPaymentComponent } from './modules/order-payment/order-payment.component';
import { AllproductComponent } from './modules/allproduct/allproduct.component';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatChipsModule} from '@angular/material/chips';
import { FilterByTypePipe } from './services/filter-by-type.pipe'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditComponent } from './modules/new-in/edit/edit.component';
import { ViewSingleComponent } from './modules/new-in/view-single/view-single.component';
import { GalaxyComponent } from './layouts/galaxy/galaxy.component';
import { UsersidebarComponent } from './shared/components/usersidebar/usersidebar.component';
import { UserMyorderComponent } from './modules/user-myorder/user-myorder.component';
import { UserViewComponent } from './modules/user-myorder/user-view/user-view.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from '@google-pay/button-angular';
import { CategoryComponent } from './modules/new-in/category/category.component';
import { ManageOrdersComponent } from './modules/manage-orders/manage-orders.component';
import { ViewManageOrdersComponent } from './modules/manage-orders/view-manage-orders/view-manage-orders.component';
import { ViewAllManageOrdersComponent } from './modules/manage-orders/view-all-manage-orders/view-all-manage-orders.component';
import { ManageUsersComponent } from './modules/manage-users/manage-users.component';
import { ViewAllManageUsersComponent } from './modules/manage-users/view-all-manage-users/view-all-manage-users.component';
import { ViewManageUsersComponent } from './modules/manage-users/view-manage-users/view-manage-users.component';
import { AdminSettingComponent } from './modules/admin-setting/admin-setting.component';
import { RandomColorGeneratorComponent } from './shared/widgets/random-color-generator/random-color-generator.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TodoComponent } from './shared/components/todo/todo.component';
import { AdminAuthComponent } from './modules/admin-auth/admin-auth.component';
import { ManageBlogsComponent } from './modules/manage-blogs/manage-blogs.component';
import { ViewBlogsComponent } from './modules/manage-blogs/view-blogs/view-blogs.component';
import { AddBlogsComponent } from './modules/manage-blogs/add-blogs/add-blogs.component';
import { CategoryBlogsComponent } from './modules/manage-blogs/category-blogs/category-blogs.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogDetailComponent } from './modules/blog-detail/blog-detail.component';

const firebaseConfig = {

  apiKey: "AIzaSyBvwGISDf7xtiEDNbBLq9Fr7IRmHDfHwd0",

  authDomain: "sample-project-d3bf1.firebaseapp.com",

  projectId: "sample-project-d3bf1",

  storageBucket: "sample-project-d3bf1.appspot.com",

  messagingSenderId: "938864007313",

  appId: "1:938864007313:web:64eb7682dec4623039c730"

};


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashboardComponent,
    SidebarComponent,
    NewInComponent,
    ClothingComponent,
    HeaderComponent,
    WidgetsComponent,
    AddComponent,
    ViewComponent,
    EarthComponent,
    SliderComponent,
    ProductComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent,
    ProductDetailComponent,
    CheckoutComponent,
    OrderStatusComponent,
    CartComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoaderComponent,
    OrderPaymentComponent,
    AllproductComponent,
    FilterByTypePipe,
    EditComponent,
    ViewSingleComponent,
    GalaxyComponent,
    UsersidebarComponent,
    UserMyorderComponent,
    UserViewComponent,
    CategoryComponent,
    ManageOrdersComponent,
    ViewManageOrdersComponent,
    ViewAllManageOrdersComponent,
    ManageUsersComponent,
    ViewAllManageUsersComponent,
    ViewManageUsersComponent,
    AdminSettingComponent,
    RandomColorGeneratorComponent,
    TodoComponent,
    AdminAuthComponent,
    ManageBlogsComponent,
    ViewBlogsComponent,
    AddBlogsComponent,
    CategoryBlogsComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatChipsModule,
    HttpClientModule,
    GooglePayButtonModule,
    AngularEditorModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [ProductService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
