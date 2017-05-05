import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared";
import { UserAddProductComponent} from "./user-add-product.component";
import { UserAddProductService} from "./user-add-product.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    UserAddProductComponent,
  ],
  providers: [
    UserAddProductService,
  ],
  exports: [
   UserAddProductComponent,
  ]
})
export class UserAddProductModule {
}
