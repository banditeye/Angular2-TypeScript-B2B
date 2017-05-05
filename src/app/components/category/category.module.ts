import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared";
import {CategoryComponent} from "./category.component";
import {CategoryService} from "./category.service";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    CategoryService,
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
