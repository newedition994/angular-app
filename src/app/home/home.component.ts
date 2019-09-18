// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-home",
  // tslint:disable-next-line: quotemark
  templateUrl: "./home.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  clickCounter: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  name: string = "";

  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    // tslint:disable-next-line: prefer-const
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
}
