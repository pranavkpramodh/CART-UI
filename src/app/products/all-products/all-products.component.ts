import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts:any = []; //array of data
  constructor(private api:ApiService, private cart:CartService) { }

  searchTerm:string='';

  ngOnInit(): void {

    // get all products
    this.api.getAllProducts().subscribe(
      (data:any)=>{
        this.allProducts = data.products
      }
    )
    // subscribe
    this.api.searchKey.subscribe(
      (data:any) => {
        this.searchTerm = data
      }
    )

    }
   
    // add to wishlist
    addtowishlist(product:any){
      this.api.addtowishlist(product).subscribe(
        (result:any) => {
          alert(result.message);
      },(result:any) => {
        alert(result.error.message)
      }
      )
    }

    addtocart(product:any){
      this.cart.addtocart(product)

    }
 


  }
 


