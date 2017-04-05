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


  constructor(private userMicropostService: UserSoldListService,
         
              private errorHandler: HttpErrorHandler) {
  }

  ngOnInit(): any {
 
  }

  
}
