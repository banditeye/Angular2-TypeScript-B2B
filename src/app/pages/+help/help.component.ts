import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mpt-help',
  templateUrl: './help.component.html',
styles:[`html,
body {
    height: 100%;
}

img {
    max-width: 100%;
}`]

})
export class HelpComponent implements OnInit {

  ngOnInit(): void {
  }

}
