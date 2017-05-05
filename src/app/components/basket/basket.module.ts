import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared";
import {BasketComponent} from "./basket.component";
import {BasketService} from "./basket.service";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
  BasketService
  ],

  declarations: [
   BasketComponent,
  ],
  exports: [
    BasketComponent,
  ]
})
export class BasketModule {
}
