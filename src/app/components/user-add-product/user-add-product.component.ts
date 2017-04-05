
import {UserAddProductService} from "./user-add-product.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";


import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import * as toastr from "toastr";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../core/domains";
import { ProductParams } from "../../core/dto";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'mpt-user-add-product',
  styleUrls: ['user-add-product.component.css'],
  templateUrl: 'user-add-product.component.html',
  providers: [UserAddProductService],
})
export class UserAddProductComponent implements OnInit {

submitted= false;
  myForm: FormGroup;
  active = true;

  constructor(private productService: ProductService,
    private errorHandler: HttpErrorHandler, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit(params): void {
    this.submitted=true;
    console.log('you submitted value:', params);
    this.productService.create(params)
      .subscribe(() => {
        toastr.success('saadsasd');
      }, this.handleError);
  }

  private handleError(error) { }

  private initForm(): void {
    this.myForm = this.fb.group({
      name: ["",[Validators.required,Validators.minLength(4)]],
      price: [],
      description: [],
      pieces: [],
      barcode: [],
      idSubcategory: []
    })
  }

 formErrors = {
    'name': '',
    'power': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };


  
}
