import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { JsonHttp } from "./../../core/services/";


const url = (categoryId: string): string => `/api/product/category${categoryId}`;
const addToBasket =  `/api/basket`;

@Injectable()
export class ProductListService {
    constructor(private http: JsonHttp) {

    }

 getProductByCategory(id: string): Observable<any> {
    return this.http.get(url(id))
    .map(res => res.json());
  }

 addToBasked(id: string,pieces: string): Observable<any> {
    return this.http.post(addToBasket, {id,pieces});

  }

}