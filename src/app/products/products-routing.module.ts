import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { ProductsModule } from './products.module';
import { WhishlistComponent } from './whishlist/whishlist.component';

const routes: Routes = [
  { path: '', component:AllProductsComponent},
  { path: 'cart', component:CartComponent},
  { path: 'wishlist', component:WhishlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
