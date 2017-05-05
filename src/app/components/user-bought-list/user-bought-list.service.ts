import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Micropost} from "../../core/domains";
import {objToSearchParams} from "../../core/services/helpers";
import {JsonHttp} from "../../core/services";

const url = (userId: string): string => `/api/users/${userId}/microposts`;

@Injectable()
export class UserBoughtListService {

  constructor(private http: JsonHttp) {
  }

   getBoughtProduct(): Observable<Micropost[]> {
    return this.http.get('api/transaction/bought')
      .map(res => res.json())
      ;
  }
}
