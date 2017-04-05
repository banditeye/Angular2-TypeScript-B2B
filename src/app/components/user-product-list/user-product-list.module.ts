import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {SharedModule} from "../../shared";
import { UserProductListComponent} from "./user-product-list.component";
import { UserProductListService} from "./user-product-list.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserProductListComponent,
  ],
  providers: [
    UserProductListService,
  ],
  exports: [
   UserProductListComponent,
  ]
})
export class UserProductListModule {
}
