// tslint:disable-next-line: quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line: quotemark
import { HttpClient } from "@angular/common/http";

@Injectable({
  // tslint:disable-next-line: quotemark
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeer() {
    // tslint:disable-next-line: quotemark
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }
}
