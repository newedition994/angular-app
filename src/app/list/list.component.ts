// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpService } from "../http.service";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-list",
  // tslint:disable-next-line: quotemark
  templateUrl: "./list.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  brews: Object;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      //console.log(this.brews);
    });
  }
}
