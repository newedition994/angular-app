// tslint:disable-next-line: quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line: quotemark
import { Routes, RouterModule } from "@angular/router";
// tslint:disable-next-line: quotemark
import { HomeComponent } from "./home/home.component";
// tslint:disable-next-line: quotemark
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  // tslint:disable-next-line: quotemark
  { path: "", component: HomeComponent },
  // tslint:disable-next-line: quotemark
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
