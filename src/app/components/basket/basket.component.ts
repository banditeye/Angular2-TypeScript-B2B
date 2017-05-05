import { Component, OnInit, Input } from "@angular/core";
import { HttpErrorHandler } from "../../core/services/http-error-handler";
import { BasketService } from "./basket.service";
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { ComponentComunicationService } from "./../../pages/buy/component-comunication.service";

@Component({
  selector: 'mpt-basket',
  styleUrls: ['basket.component.css'],
  templateUrl: 'basket.component.html',
  providers: [],
})
export class BasketComponent implements OnInit {
  @Input() category: any;
  basket: any;


  constructor(private errorHandler: HttpErrorHandler, private basketService: BasketService) {
  }


  ngOnInit(): any {
    this.basketService.getProductByCategory()
    .subscribe(u =>this.basket=u );

  }

  deleteBasket(){
     if (!window.confirm('Jesteś pewien?')) return;
    this.basketService.deleteAllBasket()
    .subscribe(()=>{});
  
  }

  confirmTransaction(){
    this.basketService.confirmTransaction()
    .subscribe(()=>{});
  }



}
