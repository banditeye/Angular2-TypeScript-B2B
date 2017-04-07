import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../shared";
import {CategoryComponent} from "./category.component";
import {ProductService} from "../../../core/services/product.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    ProductService,
  ],

  declarations: [
    CategoryComponent,
  ],
  exports: [
    CategoryComponent,
  ]
})
export class CategoryModule {
}
