import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared";
import {ProductListComponent} from "./product-list.component";
import {ProductListService} from "./product-list.service";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
  ProductListService
  ],

  declarations: [
    ProductListComponent,
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductListModule {
}
