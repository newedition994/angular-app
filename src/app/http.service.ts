// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class HttpService {
  constructor() {}

  myMethod() {
    // tslint:disable-next-line: quotemark
    console.log("hey, whats up!");
  }
}
