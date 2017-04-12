import {Component, OnInit} from "@angular/core";
import {CategoryService} from "./category.service"
import {Product} from "../../../core/domains";
import {HttpErrorHandler} from "../../core/services/http-error-handler";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'mpt-category',
    templateUrl: './category.component.html',
    styleUrls:['./category.component.css'],
})
export class CategoryComponent implements OnInit{

 category:any;

 
  totalPages: number;
  page: number;

    constructor(private categoryService: CategoryService,
              private errorHandler: HttpErrorHandler,
             ) {
  }

ngOnInit():void {
  this.categoryService.getUserProduct()
  .subscribe(data=>this.category=data);
    
}

}