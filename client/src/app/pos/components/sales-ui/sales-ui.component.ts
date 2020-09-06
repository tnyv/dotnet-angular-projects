import { Component, OnInit } from "@angular/core";
import { PosGlobals } from "./../../pos-globals"

@Component({
  selector: "app-sales-ui",
  templateUrl: "./sales-ui.component.html",
  styleUrls: ["./sales-ui.component.scss"]
})
export class SalesUIComponent implements OnInit {
  constructor(globals: PosGlobals) {
    globals.page = "sales";
    console.log(globals.page);
  }

  ngOnInit() {}
}
