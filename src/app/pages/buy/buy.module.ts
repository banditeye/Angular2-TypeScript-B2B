import {BuyComponent} from "./buy.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CategoryModule} from "./category/category.module";
import {ProductListComponent} from './../../components';
import {CategoryComponent} from './../../components';
import {BasketComponent} from './../../components';
import {CategoryService} from './../../core/services/category.service'
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {BuyRoutingModule} from './buy-routing.module';
import {ProductListService} from "./../../components/product-list/product-list.service";
import {BasketService} from "./../../components/basket/basket.service";


@NgModule({
  imports: [
   ReactiveFormsModule, FormsModule,BrowserModule, BuyRoutingModule

  ],
  providers: [
    CategoryService,ProductListService, BasketService
    
  ],  
  declarations: [
   BuyComponent,
   ProductListComponent,
   BasketComponent,
   CategoryComponent,
  ],
  exports: [
    BuyComponent,
  ]
})
export class BuyModule {
}
