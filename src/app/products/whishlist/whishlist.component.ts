import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {

  wishlist:any = []
  errorMsg:any

  constructor(private api:ApiService, private router:Router, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any) => {
          this.wishlist = data.products
          if(this.wishlist.length == 0 ){
            this.errorMsg =  "emptywishlist";
          }
          this.router.navigateByUrl('products/wishlist')
          console.log(this.wishlist.length);
          
      },
      (data:any) => {
          this.errorMsg = data.error.message
      }
    )
  }


  
  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any) => {
        alert(result.message)
        window.location.reload();
    },
    (result:any) => {
      alert(result.error.message)

    }
    )

  }
 

  addtocart(product:any){
    this.cart.addtocart(product);
    // this.addtocart(product)
  }

  



}
