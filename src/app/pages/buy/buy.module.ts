import {BuyComponent} from "./buy.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {CategoryModule} from "./category/category.module";

const routes: Routes = [
  {path: 'buy', component: BuyComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CategoryModule
  ],
  declarations: [
   BuyComponent,
  ],
  exports: [
    BuyComponent,
  ]
})
export class BuyModule {
}
