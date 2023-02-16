import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any = [];//array
  cartlist= new BehaviorSubject([]);//list


  constructor() { }

  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//stream of data
    console.log(this.cartlist);
    let total = this.gettotal();
    console.log(total);
    
  }
  

  gettotal(){
    let grandtotal = 0
    this.cartarray.map((item:any) => {
      grandtotal += item.price;
    })
    return grandtotal;
  }

  removecart(product:any){
    this.cartarray.map((item:any, index:any) => {
      if(product.id == item.id){
        this.cartarray.splice(index, 1)//remove from cart
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }

  removeall(){
    this.cartarray = [];
    this.cartarray.next(this.cartarray);
  }




}
