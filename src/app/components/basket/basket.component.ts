import { Component, OnInit, Input } from "@angular/core";
import { HttpErrorHandler } from "../../core/services/http-error-handler";
import { BasketService } from "./basket.service";
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { ComponentComunicationService } from "./../../pages/buy/component-comunication.service";
import {Basket} from '../../core/dto';

@Component({
  selector: 'mpt-basket',
  styleUrls: ['basket.component.css'],
  templateUrl: 'basket.component.html',
  providers: [],
})
export class BasketComponent implements OnInit {
  @Input() category: any;
   basket: Basket[]=[];
  checker:boolean=false;
  price:number=0;
  items:number=0;

  constructor(private errorHandler: HttpErrorHandler, private basketService: BasketService) {
  }


  ngOnInit(): void {
    this.basketService.getProductByCategory()
    .subscribe(u =>{
      this.basket=u;  
      this.checkerBasket();
      });
    console.log("Koszyk posiada: "+this.basket)
  
    }

    checkerBasket(){


 if(this.basket.length==0)
 {
   this.checker=false;
 }else{
   this.checker=true;
     for (let entry of this.basket) {
         this.items=this.items+entry.pieces;
         this.price=this.price+(entry.product.price*entry.pieces);
}
 }
      

    }


  deleteBasket(){
     if (!window.confirm('Jesteś pewien?')) return;
    this.basketService.deleteAllBasket()
    .subscribe(()=>{});
  }

  confirmTransaction(){
    this.basketService.confirmTransaction()
    .subscribe(()=>{});
     this.basketService.deleteAllBasket()
    .subscribe(()=>{});

  }



}