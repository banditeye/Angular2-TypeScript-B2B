import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {JsonHttp} from "./";
import {PageRequest, Page, ProductParams} from "../dto";
import {User, Product} from "../domains";
import {objToSearchParams} from "./helpers";

const url = '/api/product';
const url2 = (userId: string): string => `/api/users/${userId}/products`;
const url3= 'api/users/me/products';
const defaultPageRequest: PageRequest = {page: 1, size: 5};

@Injectable()
export class ProductService{
    constructor(private http: JsonHttp){

    }

     

   create(params: ProductParams): Observable<Response> {
    return this.http.post(url, params);
  }

  list(pageRequest: PageRequest = defaultPageRequest): Observable<Page<Product>> {
    return this.http.get(url, {search: objToSearchParams(pageRequest)})
      .map(res => res.json())
      ;
  }

  getUserProduct1(id: string|number): Observable<any> {
    return this.http.get(`${url}/${id}`)
    .map(res => res.json());
  }

    getUserProduct(id: string): Observable<any> {
    return this.http.get(url2(id))
    .map(res => res.json());
  }

     getMyProduct(): Observable<any> {
    return this.http.get(url3)
    .map(res => res.json());
  }

  
    
}