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
clickedTransaction:any;
products:any;
index:number;

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

  getTransactionProduct(id:any)
  {
    this.userMicropostService.getBoughtProductbyTransaction(id)
    .subscribe(data=>this.products=data);
  }

  onSelect(transaction:any)
  {
    this.clickedTransaction=transaction;
    this.getTransactionProduct(this.clickedTransaction.id);
  }

  setIndex(i:number)
  {
    this.index=i;
  }

 
}
