import { Component, OnInit } from "@angular/core";
import { ConfirmDialogService } from "./../services/confirm-dialog.service";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { DataService } from "./../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  data: Observable<any[]>;
  tableConfig;

  constructor(
    private confirmDialogService: ConfirmDialogService,
    private _router: Router,
    private httpService: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.data = this.dataService.getData();
    this.tableConfig = this.dataService.getTableConfig();
  }

  showDialog() {
    this.confirmDialogService.confirmThis(
      "Are you sure you want to proceed?",
      () => {
        this.httpService.get("./assets/birds.json").subscribe(
          data => {
            if (data) {
              this._router.navigate(["/home"]);
            }
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          }
        );
      },
      function() {}
    );
  }
}
