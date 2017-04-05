import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivatePageGuard} from "./../../core/services/private-page.guard";
import {MyProductsComponent} from "./my-products.component";


import {UserProductListComponent} from "./../../components";
import {UserAddProductComponent} from "./../../components";
import {UserBoughtListComponent} from "./../../components";
import {UserSoldListComponent} from "./../../components";



const myProductsRoutes: Routes = [
  {
    path: 'myproducts',
    component: MyProductsComponent,
    //canActivate: [PrivatePageGuard],
    children: [
      {
        path: '',
       // canActivateChild: [PrivatePageGuard],
        children: [
         { path: 'add', component: UserAddProductComponent },
        // { path: 'my', component: MyComponent },
           { path: 'bought', component: UserBoughtListComponent },
          { path: 'sold', component: UserSoldListComponent },
          { path: '', component: UserProductListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(myProductsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyProductsRoutingModule {}