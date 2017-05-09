import {  OnInit } from "@angular/core";
import { Product } from "../../core/domains";
import { CategoryService } from "./../../core/services/category.service";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorHandler } from "../../core/services/http-error-handler";
import {ComponentComunicationService} from "./component-comunication.service";
import {ProductListComponent} from "./../../components/product-list/product-list.component";

@Component({
    selector: 'mpt-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css'],
    providers: [ComponentComunicationService]
})
export class BuyComponent implements OnInit {

    category: any;
    clickedCategory:any;
    subcategory:any;

     clicked=false;

    constructor(private categoryService: CategoryService,private componentComunicationService:ComponentComunicationService, private errorHandler: HttpErrorHandler) {
    }



    //----------------------------------------------

    ngOnInit(): void {
        this.categoryService.getUserProduct()
            .subscribe(data => this.category = data);

    }

    onClick(link:any){
        this.clickedCategory=link;
              console.log(this.clickedCategory);

    }
    getSubCategory(id:any)
    {
         this.categoryService.getSubcategoryById(id)
            .subscribe(data => this.subcategory = data);
    }

}