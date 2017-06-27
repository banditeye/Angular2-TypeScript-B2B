import {UserAddProductService} from "./user-add-product.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";


import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import * as toastr from "toastr";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../core/domains";
import { ProductParams } from "../../core/dto";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { CategoryService } from "./../../core/services/category.service";

@Component({
  selector: 'mpt-user-add-product',
  styleUrls: ['user-add-product.component.css'],
  templateUrl: 'user-add-product.component.html',
  providers: [UserAddProductService],
})
export class UserAddProductComponent implements OnInit {
  category: any;
  subcategory:any;
  selectedCategory:any;
  product:Product={};

submitted= false;
  myForm: FormGroup;
  active = true;

  constructor(private productService: ProductService,private categoryService: CategoryService,private userAddProduct:UserAddProductService,
    private errorHandler: HttpErrorHandler, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategory();
    this.setSubcategory(1);
  }
  onSubmit(params): void {
    this.submitted=true;
    console.log('you submitted value:', params);
    this.productService.create(params)
      .subscribe(() => {
        toastr.success('saadsasd');
      }, this.handleError);
  }

  getCategory(){
    this.categoryService.getUserProduct()
    .subscribe(data=>this.category=data);
  }

  setSubcategory(name:any)
  {
    console.log("kliknieto kategorie: "+name)

    this.categoryService.getSubcategoryById(name)
    .subscribe(data=>this.subcategory=data);
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
      'required':      'Nazwa jest wymagana.',
      'minlength':     'Nazwa musi być dłuższa niż 4 znaki.',
      'maxlength':     'Nazwa nie może być dłuższa niż 24 znaki.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };


 private getCookie(name: string) {
          let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }


wartosc:any;
    code:any;
openCamera(){
  console.log("otwieram kamere");
  this.code=parseFloat(this.getCookie("scan"));
  

   //console.log("Cookies 1" +this.getCookie("scan"));
     // console.log("Cookies 1" +this.getCookie("scan"));
      
}


getProductByBarcode(){
  this.userAddProduct.getProductByBarcode(parseInt(this.getCookie("scan")))
  .subscribe(data=>this.product=data);
}
  
}
