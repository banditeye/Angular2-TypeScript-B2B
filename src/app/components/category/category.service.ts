import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {JsonHttp} from "../../core/services";


const url = '/api/category';
const url2 = (userId: string): string => `/api/users/${userId}/products`;

@Injectable()
export class CategoryService {

  constructor(private http: JsonHttp) {
  }

    getUserProduct(): Observable<any> {
    return this.http.get(url)
    .map(res => res.json());
  }
}