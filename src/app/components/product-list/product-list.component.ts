import { Component, OnInit,EventEmitter, Input,Output } from "@angular/core";
import { HttpErrorHandler } from "../../core/services/http-error-handler";
import { ProductListService } from "./product-list.service";
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { ComponentComunicationService } from "./../../pages/buy/component-comunication.service";
import * as toastr from "toastr";

@Component({
  selector: 'mpt-product-list',
 // styleUrls: ['product-list.component.css'],
  templateUrl: 'product-list.component.html',
  providers: [],
})
export class ProductListComponent implements OnInit {
  @Input() category: any;
  products: any;
  response:any;

  // uses to update the cart
 @Output() created = new EventEmitter();

  constructor(private errorHandler: HttpErrorHandler, private productListService: ProductListService) {}

  ngOnChanges(changes: any) {
    console.log(changes.category.currentValue);
    this.initProduct(changes.category.currentValue);
  }

  ngOnInit(): any { }

  initProduct(clicked) {
    this.productListService.getProductByCategory(clicked)
      .subscribe(data => this.products = data);
  }

  addToBasket(id:string,pieces:string){
    console.log(id +"Ilosc "+pieces);
    this.productListService.addToBasked(id,pieces)
      .subscribe(() => {
        toastr.success('Dodano do koszyka!');
        this.created.emit({});
      }, e => this.errorHandler.handle(e))
    ;


  }

}
