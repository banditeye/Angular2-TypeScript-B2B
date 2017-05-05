import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared";
import { UserSoldListComponent} from "./user-sold-list.component";
import { UserSoldListService} from "./user-sold-list.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    UserSoldListComponent,
  ],
  providers: [
    UserSoldListService,
  ],
  exports: [
   UserSoldListComponent,
  ]
})
export class UserSoldListModule {
}
