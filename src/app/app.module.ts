import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmDialogService } from "./services/confirm-dialog.service";
import { HttpClientModule } from "@angular/common/http";
import { TableComponent } from "./table/table.component";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmDialogComponent,
    TableComponent,
    MainComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,AngularFontAwesomeModule],
  providers: [ConfirmDialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
