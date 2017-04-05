import { Component,OnInit,Input } from '@angular/core';
import {ProductService} from './../../core/services/product.service';
import {HttpErrorHandler} from "../../core/services/http-error-handler";

@Component({
  template:  `
    <p>My products list</p>
    <ol>
    <li *ngFor ="let product of myProduct">
    <p>{{product.name}}</p>
    </li>
    </ol>
   
  `
})
export class MyComponent implements OnInit{ 
  myProduct:any;
   @Input() userId: string;

  constructor(private productService: ProductService){}



  ngOnInit() {
    
     this.productService.getUserProduct('1')
     .subscribe(data=> this.myProduct=data );
  }

  

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/