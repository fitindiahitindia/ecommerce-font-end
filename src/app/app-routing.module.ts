import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NewInComponent } from './modules/new-in/new-in.component';
import { ClothingComponent } from './modules/clothing/clothing.component';
import { AddComponent } from './modules/new-in/add/add.component';
import { ViewComponent } from './modules/new-in/view/view.component';
import { EarthComponent } from './layouts/earth/earth.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { FaqComponent } from './modules/faq/faq.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { OrderStatusComponent } from './modules/order-status/order-status.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { CartComponent } from './modules/cart/cart.component';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { ProductComponent } from './modules/product/product.component';
import { OrderPaymentComponent } from './modules/order-payment/order-payment.component';
import { AllproductComponent } from './modules/allproduct/allproduct.component';
import { EditComponent } from './modules/new-in/edit/edit.component';
import { ViewSingleComponent } from './modules/new-in/view-single/view-single.component';
import { AuthGuard } from './services/auth.guard';
import { GalaxyComponent } from './layouts/galaxy/galaxy.component';
import { UserMyorderComponent } from './modules/user-myorder/user-myorder.component';
import { UserViewComponent } from './modules/user-myorder/user-view/user-view.component';
import { UsersettingComponent } from './shared/components/usersetting/usersetting.component';
import { LoginAuthGuardGuard } from './services/login-auth-guard.guard';
import { CategoryComponent } from './modules/new-in/category/category.component';
import { ManageOrdersComponent } from './modules/manage-orders/manage-orders.component';
import { ViewManageOrdersComponent } from './modules/manage-orders/view-manage-orders/view-manage-orders.component';
import { ViewAllManageOrdersComponent } from './modules/manage-orders/view-all-manage-orders/view-all-manage-orders.component';
import { ManageUsersComponent } from './modules/manage-users/manage-users.component';
import { ViewAllManageUsersComponent } from './modules/manage-users/view-all-manage-users/view-all-manage-users.component';
import { ViewManageUsersComponent } from './modules/manage-users/view-manage-users/view-manage-users.component';
import { AdminSettingComponent } from './modules/admin-setting/admin-setting.component';
import { RandomColorGeneratorComponent } from './shared/widgets/random-color-generator/random-color-generator.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { AdminAuthComponent } from './modules/admin-auth/admin-auth.component';
import { AdminGuard } from './services/admin.guard';
import { ManageBlogsComponent } from './modules/manage-blogs/manage-blogs.component';
import { ViewBlogsComponent } from './modules/manage-blogs/view-blogs/view-blogs.component';
import { AddBlogsComponent } from './modules/manage-blogs/add-blogs/add-blogs.component';
import { CategoryBlogsComponent } from './modules/manage-blogs/category-blogs/category-blogs.component';
import { BlogDetailComponent } from './modules/blog-detail/blog-detail.component';

const routes: Routes = [
  //*******************website********************** */
  {
    path: '',
    component: EarthComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'all-products', component: AllproductComponent },
      { path: 'order-payment', component: OrderPaymentComponent },
      { path: 'order-status', component: OrderStatusComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'cart', component: CartComponent, title: 'cart' },
      { path: 'color-generator', component: RandomColorGeneratorComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
    ],
  },

  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [LoginAuthGuardGuard],
    children: [
      { path: '', pathMatch: 'full', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
  // {path:'**',component:NotfoundComponent},

  // *****************************user dashboard******************
  {
    path: 'user-dashboard',
    component: GalaxyComponent,
    canActivate: [AuthGuard],
    children: [
      {path:'',redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
      {
        path: 'myorder',
        component: UserMyorderComponent,
        children: [{ path: '', component: UserViewComponent }],
      },
      { path: 'setting', component: UsersettingComponent },
    ],
  },

  // **************************admin dashboard**************************
  {
    path: 'admin',
    children: [{ path: '', pathMatch: 'full', component: AdminAuthComponent }],
  },
  {
    path: 'admin-dashboard',
    component: DefaultComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },

      // manage product
      {
        path: 'new-in',
        component: NewInComponent,
        children: [
          { path: '', component: ViewComponent },
          { path: 'single-view/:id', component: ViewSingleComponent },
          { path: 'add', component: AddComponent },
          { path: 'edit/:id', component: EditComponent },
          { path: 'category', component: CategoryComponent },
        ],
      },
      // manage blog
      {
        path: 'manage-blogs',
        component: ManageBlogsComponent,
        children: [
          { path: '', component: ViewBlogsComponent },
          { path: 'single-view/:id', component: ViewSingleComponent },
          { path: 'add', component: AddBlogsComponent },
          { path: 'edit/:id', component: EditComponent },
          { path: 'category', component: CategoryBlogsComponent },
        ],
      },
      //manage orders
      {
        path: 'manage-orders',
        component: ManageOrdersComponent,
        children: [
          { path: '', component: ViewAllManageOrdersComponent },
          { path: 'view/:id', component: ViewManageOrdersComponent },
        ],
      },
      //manage users
      {
        path: 'manage-users',
        component: ManageUsersComponent,
        children: [
          { path: '', component: ViewAllManageUsersComponent },
          { path: 'view/:id', component: ViewManageUsersComponent },
        ],
      },
      //setting
      { path: 'setting', component: AdminSettingComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
