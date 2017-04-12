import {Component, OnInit, Input} from "@angular/core";
import {UserProductListService} from "./user-product-list.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";
import { ProductService } from "../../core/services/product.service";

@Component({
  selector: 'mpt-user-product-list',
  styleUrls: ['user-product-list.component.css'],
  templateUrl: 'user-product-list.component.html',
  providers: [UserProductListService],
})
export class UserProductListComponent implements OnInit {


   myProduct:any;
   @Input() userId: string;

  constructor(private productService: ProductService){}



  ngOnInit() {
    
     this.productService.getMyProduct()
     .subscribe(data=> this.myProduct=data );
  }

  

  
}
