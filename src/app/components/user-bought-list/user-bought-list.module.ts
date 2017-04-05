import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {SharedModule} from "../../shared";
import { UserBoughtListComponent} from "./user-bought-list.component";
import { UserBoughtListService} from "./user-bought-list.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    UserBoughtListComponent,
  ],
  providers: [
    UserBoughtListService,
  ],
  exports: [
   UserBoughtListComponent,
  ]
})
export class UserBoughtListModule {
}
