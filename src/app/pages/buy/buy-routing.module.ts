import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePageGuard } from "./../../core/services/private-page.guard";
import { MyProductsComponent } from "./my-products.component";
import { BuyComponent } from "./buy.component";

import { ProductListComponent } from './../../components'

const routes: Routes = [
  {
    path: 'buy', component: BuyComponent,
    
    children: [
   // {path: '', component: ProductListComponent},
    {path: '**', component: ProductListComponent}
     ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BuyRoutingModule { }