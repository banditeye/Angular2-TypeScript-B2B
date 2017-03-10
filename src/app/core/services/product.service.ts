import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {JsonHttp} from "./";
import {PageRequest, Page, ProductParams} from "../dto";
import {User, Product} from "../domains";
import {objToSearchParams} from "./helpers";

const url = '/api/product';
const defaultPageRequest: PageRequest = {page: 1, size: 5};

@Injectable()
export class ProductService{
    constructor(private http: JsonHttp){

    }

     

      create(params: ProductParams): Observable<Response> {
    return this.http.post(url, {params});
  }

  list(pageRequest: PageRequest = defaultPageRequest): Observable<Page<Product>> {
    return this.http.get(url, {search: objToSearchParams(pageRequest)})
      .map(res => res.json())
      ;
  }

  
    
}