import { MyProductsComponent } from "./my-products.component";
import { Routes, RouterModule } from "@angular/router";
import { MyProductsRoutingModule } from "./my-products-routing.module";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {CommonModule} from "@angular/common";
import {ProductService} from "./../../core/services/product.service";

import {UserProductListComponent} from './../../components'
import {UserAddProductComponent} from './../../components'
import {UserBoughtListComponent} from './../../components'
import {UserSoldListComponent} from './../../components'



@NgModule({
  imports: [
    MyProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

  ],
  providers:[
   ProductService 
  ],
  declarations: [
    
    MyProductsComponent,
    UserProductListComponent,
    UserAddProductComponent,
    UserBoughtListComponent,
    UserSoldListComponent
  ],
  exports: [
    MyProductsComponent,
  ]
})
export class MyProductsModule {
}
