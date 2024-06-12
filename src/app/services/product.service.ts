import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { contact,productResponse, review } from '../data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Firestore,collection} from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient,private router:Router, private fs:Firestore) { }
  
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  cartData = new EventEmitter<[]>();
  userLoginToken = new EventEmitter<string>();
  adminLoginToken = new EventEmitter<string>();
  myOrderData:any[] = [];
  myOrderPayment = new EventEmitter<any[]>();
  productInCheckout:any[]=[];
  // URL = "http://192.168.247.77:5000/api/v1";
  // URL = "http://192.168.29.108:5000/api/v1";
  // URL = "http://localhost:5000/api/v1";
  // URL="https://ecommerce-api-topaz.vercel.app/api/v1"
     URL="https://ecommerce-api-weld.vercel.app/api/v1"

  get_product():Observable<any>{
   const adminlogintoken=this.getAdminLoginToken();
   const headers = {"Authorization":"Bearer "+adminlogintoken}
   const getProduct= this._http.get<productResponse>(this.URL+"/product",{headers});
   return getProduct
  }
  get_SingleProduct(id:any){
    return this._http.get(this.URL+"/product/"+id);
   }
  search_product(query:string):Observable<any>{
    
    const searchProduct= this._http.get<productResponse>(this.URL+`/product?q=${query}`);
     return searchProduct
   } 
  register_user(credential:object){
    return this._http.post(this.URL+"/userAuth/register",credential)
  } 
  login_user(credential:object){
    return this._http.post(this.URL+"/userAuth/login",credential)
  }
 login_admin(credential:object){
    return this._http.post(this.URL+"/adminAuth/login",credential)
  }
  createProduct(data:any){
    const userlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
    return this._http.post(this.URL+"/product",data,{headers});
  }
  removeSingleProduct(id:any){
    return this._http.delete(this.URL+"/product/"+id);
  }
  update_SingleProduct(id:any,data:any){
    return this._http.put(this.URL+"/product/"+id,data);
  }
  create_Order(data:object){
    return this._http.post(this.URL+"/order",data);
  }
  get_profile(){
    const userlogintoken=this.getUserLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
      return this._http.get(this.URL+"/userAuth/profile",{headers})
  }
  get_UserProfile(){
    const userlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
      return this._http.get(this.URL+"/userAuth/profile",{headers})
  }
  get_AllUserProfile(){
    const userlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
    return this._http.get(this.URL+"/userAuth/Allprofile",{headers});
  }
  update_UserStatus(id:string,status:boolean){
    const data = {"userId":id,"status":status}
    const userlogintoken=this.getUserLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
    return this._http.put(this.URL+"/userAuth/status/",data,{headers});
  }
  get_UserOrder(orderId:string){
    const userlogintoken=this.getUserLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
      return this._http.get(this.URL+"/order/"+orderId,{headers})
  }
  set_OrderStatus(orderId:string,status:object){
    return this._http.post(this.URL+"/orderStatus/"+orderId,status);
  }
  get_SingleOrderStatus(orderId:any){
    return this._http.get(this.URL+"/orderStatus/"+orderId);
  }
  
  get_AllUserOrders(){
    return this._http.get(this.URL+"/order");
  }
  get_UserOrders(){
    const userlogintoken=this.getUserLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
    return this._http.get(this.URL+"/user/orders/",{headers});
  }
  get_Country(){
    return this._http.get(this.URL+"/country");
  }
  get_State(country:string){
    const countryObj = {
      country:country.toLowerCase()
    }
    return this._http.post(this.URL+"/state",countryObj);
  }
  create_Category(categroy:any){
    const adminlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+adminlogintoken}
    return this._http.post(this.URL+"/category",categroy,{headers});
  }
  upload(file:any){
    return this._http.post(this.URL+"/upload",file)
  }
  get_Categroy(){
    const adminlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+adminlogintoken}
    return this._http.get(this.URL+"/category",{headers});
  }
  remove_Category(id:any){
    return this._http.delete(this.URL+"/category"+"/"+id);
  }
  edit_Category(id:any,category:any){
    console.log("id is:"+id)
    console.log("category is:"+category)
    return this._http.put(this.URL+"/category/"+id,category);
  }
  user_Verify(){
    const userlogintoken=this.getUserLoginToken();
    const headers = {"Authorization":"Bearer "+userlogintoken}
      return this._http.get(this.URL+"/userAuth/tokenVerify",{headers})
  }
  get_AdminProfile():any{
      const adminlogintoken=this.getAdminLoginToken();
      const headers = {"Authorization":"Bearer "+adminlogintoken}
        return this._http.get(this.URL+"/adminAuth/adminProfile",{headers})
    
  }
  update_AdminPsw(data:any){
   
    const adminlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+adminlogintoken}
      return this._http.post(this.URL+"/adminAuth/adminPassword",data,{headers})
  }
  getAdminDashAnalsis(){
    const adminlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+adminlogintoken}
    return this._http.get(this.URL+"/adminDashboardAnalysis",{headers})
  }
  create_blog(data:any){
    return this._http.post(this.URL+"/blog/create",data)
  }
  create_blog_category(categroy:any){
    const adminlogintoken=this.getAdminLoginToken();
    const headers = {"Authorization":"Bearer "+adminlogintoken}
    return this._http.post(this.URL+"/blog/category",categroy,{headers});
  }
  get_blog_category(){
      return this._http.get(this.URL+"/blog/category")
  }
  get_blog(){
    return this._http.get(this.URL+"/blog")
  }
  get_blogById(blogId:any){
    return this._http.get(this.URL+"/blog/byId/"+blogId)
  }

  setProductInCheckout(data:any){
    this.productInCheckout=data
  }
  
  setLocalDataMyOrder(data:any){
    this.myOrderData=data;
  }
  getLocalDataMyOrder(){
    return this.myOrderData;
  }
  setLocalPaymentOrder(data:any){
    this.myOrderPayment.emit(data)
  }
  setUserLoginToken(token:any){
   let setToken= localStorage.setItem('userlogintoken',JSON.stringify(token));
   this.userLoginToken.emit(token);
  }
  getUserLoginToken(){
    let getToken=JSON.parse(localStorage.getItem('userlogintoken')!);
    return getToken;
  }

  setAdminLoginToken(token:any){
    let setToken= localStorage.setItem('adminlogintoken',JSON.stringify(token));
    this.adminLoginToken.emit(token);
   }
   getAdminLoginToken(){
     let getToken=JSON.parse(localStorage.getItem('adminlogintoken')!);
     return getToken;
   }
  findUserLoginToken(){

  }
  removeUserLoginToken(tokenName:string){
    localStorage.removeItem(tokenName);
  }
  
  getProduct(){
    let localCart = JSON.parse(localStorage.getItem('cartItem')! );
    return this.cartData.emit(localCart)
  }

  
  
  // getProductById(id:any){
  //   let getProductLocal;
  //   for(let i=0;i<this.category.length;i++){
  //     if(this.category[i].id==`${id}`){
  //       getProductLocal=this.category[i];
  //     }
      
  //   }
  //  return getProductLocal;

  // }
  setLocalCart(_item:any,sign?:string){
    let cartData=[];
    let localCart = localStorage.getItem('cartItem');
    if(!localCart){
     localStorage.setItem('cartItem',JSON.stringify([_item]));
    }else{
      cartData=JSON.parse(localCart);
      let existValue = cartData.filter((obj:any)=>obj._id==_item._id && obj.quantity == _item.quantity)
     if(existValue.length == 0){
       cartData.push(_item);
       localStorage.setItem('cartItem',JSON.stringify(cartData));
     }else{
      for(let i=0;i<cartData.length;i++){
        if(cartData[i]._id==_item._id && cartData[i].quantity==_item.quantity){
          if(sign == "++" && cartData[i].noItems > 1){
            cartData[i].noItems++;
          }else if(sign=="--" && cartData[i].noItems > 1){
            cartData[i].noItems--;
          }
          else{
            cartData[i].noItems++;
          }
        }
      }
       localStorage.setItem('cartItem',JSON.stringify(cartData));
     }
    }
   }
   
   clearLocalStorage(){
    localStorage.clear();
   }

  
  localCart(_item:any){
    
    this.setLocalCart(_item);
    this.getProduct();
  }

  getLocalCart() {
    let localCart = JSON.parse(localStorage.getItem('cartItem')!);
    return localCart;
  }
  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.getLocalCart().length; i++) {
      totalPrice +=this.getLocalCart()[i].price * this.getLocalCart()[i].noItems;
    }
    return totalPrice;
  }
  getProductQuantity(){
    let totalQuantity = 0;
    for (let i = 0; i < this.getLocalCart().length; i++) {
      totalQuantity +=this.getLocalCart()[i].noItems;
    }
    return totalQuantity;
  }
  getSingleProductQuantity(){
    let totalQuantity = [];
    for (let i = 0; i < this.getLocalCart().length; i++) {
      totalQuantity.push(this.getLocalCart()[i].noItems);
    }
    return totalQuantity;
  }
  getCartLength() {
    return this.getLocalCart().length;
  }
 
  removeCart(id: any) {
    if (this.getLocalCart()) {
      let items:any = this.getLocalCart();
      items = items.filter((item: any, index:any) => {
        return id !== item._id;
      });
      localStorage.setItem('cartItem', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  
  updateQuantityCart(id:string,quantity:number){
    console.log(id + "+++++++++++" + quantity)
    var lcart=[]
    if(this.getLocalCart()){
      let items:any = this.getLocalCart();
      // const finditems = items.filter((item:any)=>{
      //   return id ==item._id
      // })
      // finditems[0].noItems=quantity;
      // localStorage.setItem('cartItem', JSON.stringify(items));
      const updatedData = items.map((item:any) => {
        if (item._id == id) {
          // Update the quantity for the specific item
          return { ...item, noItems: quantity };
        }
        return item;
      });
      console.log(updatedData)
    }
  }

  // contact
  submitContact(value:contact){
    return this._http.post(this.URL+"/contact",value)
  }

  // review
  setReview(data:review){
   return this._http.post(this.URL+"/review",data)
  }

  reloadUser(){
    if(localStorage.getItem("userlogintoken")){
      this.isUserLoggedIn.next(true);
      this.router.navigate([""])
    }
  }
  refresh(): void {
    window.location.reload();
}

  getLocalUserDetail(itemName:string){
    let localUserDet = JSON.parse(localStorage.getItem(itemName)!);
    return localUserDet; 
  }
  setLocalUserDetail(itemName:string,value:any){
    localStorage.setItem(itemName,JSON.stringify(value));
  }
  

  //firebase

  getNotes(){
    let notesCollection = collection(this.fs,'notes');
    return collectionData(notesCollection,{idField:'id'});
  }

  addNote(desc:string){
    let data = {description:desc};
    let notesCollection = collection(this.fs,'notes');
    return addDoc(notesCollection,data);
  }
  
  deleteNote(id:string){
    let docRef= doc(this.fs,'notes/'+id);
    return deleteDoc(docRef);
  }
 
}
