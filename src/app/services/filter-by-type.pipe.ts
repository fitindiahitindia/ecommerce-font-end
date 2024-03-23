import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType',
})
export class FilterByTypePipe implements PipeTransform {
  transform(product: any[], categorywise_var: any, sortByFilter_var: any, search_var:any): any {
    // if(search_var){
    //   return searchfilter();
    // }
    function catfilter(){
      return product.filter((product) => {
        const categroy = product.type === categorywise_var;
        return categroy;
      });
    }
    function sortfilter(){
      return product.filter((product) => {
        const sort = product.quantity === sortByFilter_var;
        return sort;
      });
    }
    function searchfilter(){
      return product.filter((search:any)=>{
        const searchResult = search.name.toLowerCase().indexOf(search_var.toLowerCase()) > -1;
        return searchResult
      })
    }
    function productNotFound(){
      return "Product not found"
    }
    
    if (categorywise_var == 'all' && sortByFilter_var == 'all' && search_var == "") {
      return product;
    } 
    else if(search_var){
     return searchfilter()
    }
    else if (categorywise_var=='all' && sortByFilter_var) {
      return sortfilter();
    }
    else if (categorywise_var && sortByFilter_var == 'all') {
      return catfilter();
    } 
    else if (categorywise_var && sortByFilter_var) {
      return product.filter((product) => {
        const categroy = product.type === categorywise_var;
        const sort = product.quantity === sortByFilter_var;
        return categroy && sort;
      });
    } 
  }
}
