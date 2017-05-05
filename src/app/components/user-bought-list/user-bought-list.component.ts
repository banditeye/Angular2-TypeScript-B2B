import {Component, OnInit, Input} from "@angular/core";
import {UserBoughtListService} from "./user-bought-list.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";

@Component({
  selector: 'mpt-user-bought-list',
  styleUrls: ['user-bought-list.component.css'],
  templateUrl: 'user-bought-list.component.html',
  providers: [UserBoughtListService],
})
export class UserBoughtListComponent implements OnInit {
listTransaction:any;

  constructor(private userMicropostService: UserBoughtListService,
         
              private errorHandler: HttpErrorHandler) {
  }

  ngOnInit(): any {
    this.list();
  }

  list(){
    this.userMicropostService.getBoughtProduct()
    .subscribe(data=>this.listTransaction=data);
  }
}
