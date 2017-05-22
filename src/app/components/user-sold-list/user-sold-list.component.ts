import {Component, OnInit, Input} from "@angular/core";
import {UserSoldListService} from "./user-sold-list.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";

@Component({
  selector: 'mpt-user-sold-list',
  styleUrls: ['user-sold-list.component.css'],
  templateUrl: 'user-sold-list.component.html',
  providers: [UserSoldListService],
})
export class UserSoldListComponent implements OnInit {
listTransaction:any;
clickedTransaction:any;
products:any;
index:number;
myProduct:boolean=false;

  constructor(private userMicropostService: UserSoldListService,
         
              private errorHandler: HttpErrorHandler) {
  }

  ngOnInit(): any {
    this.list();
  }

  


 list()
  {
    this.userMicropostService.getSoldProduct()
    .subscribe(data=>this.products=data);
  }



   }

