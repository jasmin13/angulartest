import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full"
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
