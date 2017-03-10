import {Component, EventEmitter, Output} from "@angular/core";
import * as toastr from "toastr";
import {ProductService} from "../../core/services/product.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";
import {Product} from "../../core/domains";
@Component({
  templateUrl: './add.component.html',
})
export class AddComponent {



   constructor(private productService: ProductService,
              private errorHandler: HttpErrorHandler) {
  }

model=new Product(1,"Kartra",34,"Mocna karta",3,12323);
 
  submitted = false;

  onSubmit() { this.submitted = true; }



}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/