// tslint:disable-next-line: quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";

// tslint:disable-next-line: quotemark
import { AppRoutingModule } from "./app-routing.module";
// tslint:disable-next-line: quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line: quotemark
import { HomeComponent } from "./home/home.component";
// tslint:disable-next-line: quotemark
import { ListComponent } from "./list/list.component";
// tslint:disable-next-line: quotemark
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
