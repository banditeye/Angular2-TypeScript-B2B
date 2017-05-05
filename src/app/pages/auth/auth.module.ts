import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AuthComponent,
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthModule {
}
