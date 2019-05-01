import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "./../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() data: Observable<any[]>;
  @Input() tableConfig;
  keys: string[];
  labels: string[];
  childKeys: string[];
  childLabels: string[];

  constructor() {}

  ngOnInit() {
    this.keys = Object.keys(this.tableConfig.parent);
    this.labels = Object.values(this.tableConfig.parent).map(data => {
      return data["label"];
    });

    this.childKeys = Object.keys(this.tableConfig.child);
    this.childLabels = Object.values(this.tableConfig.child).map(data => {
      return data["label"];
    });
  }

  onTrClick(e) {
    const tr = e.target.closest("tr");
    const isExpand = tr.getAttribute("aria-expanded") === "true";

    const ele = document
      .getElementById("expandableTable")
      .querySelectorAll(".arrow");
    ele.forEach(element => {
      console.log(element);
      element.classList.toggle("arrow-right", true);
      element.classList.toggle("arrow-down", false);
    });

    const element = tr.querySelector("i");
    element.classList.toggle("arrow-right", isExpand);
    element.classList.toggle("arrow-down", !isExpand);
  }
}
