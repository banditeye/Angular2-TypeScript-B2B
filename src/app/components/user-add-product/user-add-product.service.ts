import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Micropost} from "../../core/domains";
import {objToSearchParams} from "../../core/services/helpers";
import {JsonHttp} from "../../core/services";

const url = (userId: string): string => `/api/users/${userId}/microposts`;

@Injectable()
export class UserAddProductService {

  constructor(private http: JsonHttp) {
  }


  getProductByBarcode(barcode:number):Observable<any>{
    return this.http.get(`api/product/barcode/${barcode}`)
    .map(res=>res.json());
  }
  
}
