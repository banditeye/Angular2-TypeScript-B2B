import {MyProductsComponent} from "./my-products.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {MyProductsRoutingModule} from "./my-products-routing.module";
import {BoughtComponent} from "./bought.component";
import {SoldComponent} from "./sold.component";
import {MyComponent} from "./my.component";
import {AddComponent} from "./add.component";
import { FormsModule }   from '@angular/forms';



@NgModule({
  imports: [
  MyProductsRoutingModule,
  FormsModule,


  ],
  declarations: [
    MyComponent,
   MyProductsComponent,
   BoughtComponent,
   SoldComponent,
   AddComponent,
  ],
  exports: [
    MyProductsComponent,
  ]
})
export class MyProductsModule {
}
