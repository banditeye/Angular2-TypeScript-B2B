import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../core/domains";
import {HttpErrorHandler} from "../../../core/services/http-error-handler";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'mpt-category',
    templateUrl: './category.component.html',
    styleUrls:['./category.component.css'],
})
export class CategoryComponent implements OnInit{

  products: Product[];
  totalPages: number;
  page: number;

    constructor(private produktService: ProductService,
              private errorHandler: HttpErrorHandler,
              private route: ActivatedRoute,
              private router: Router) {
  }

ngOnInit():void {
    this.route.params.subscribe(params => {
      this.page = +(params['page'] || 1);
      this.list(this.page);
    });   
}

  onPageChanged(page: number) {
    this.router.navigate(['/users', {page: page}]);
  }

 private list(page: number) {
    this.produktService.list({page: page, size: 5})
      .subscribe(usersPage => {
        this.products = usersPage.content;
        this.totalPages = usersPage.totalPages;
      }, e => this.errorHandler.handle(e))
    ;
  }
}