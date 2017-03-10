import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivatePageGuard} from "./../../core/services/private-page.guard";
import {MyProductsComponent} from "./my-products.component";
import {BoughtComponent} from "./bought.component";
import {SoldComponent} from "./sold.component";
import {MyComponent} from "./my.component";
import {AddComponent} from "./add.component";

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
         { path: 'add', component: AddComponent },
        // { path: 'my', component: MyComponent },
           { path: 'bought', component: BoughtComponent },
          { path: 'sold', component: SoldComponent },
          { path: '', component: MyComponent }
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