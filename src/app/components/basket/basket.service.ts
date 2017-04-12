import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { JsonHttp } from "./../../core/services/";


const url = `/api/basket/my`;
@Injectable()
export class BasketService {
    constructor(private http: JsonHttp) {

    }

 getProductByCategory(): Observable<any> {
    return this.http.get(url)
    .map(res => res.json());
  }


}