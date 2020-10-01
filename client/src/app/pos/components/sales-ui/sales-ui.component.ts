import { Component, OnInit } from "@angular/core";
import { PosGlobals } from "./../../pos-globals";
import { HttpsService } from "../../../https.service";

@Component({
  selector: "app-sales-ui",
  templateUrl: "./sales-ui.component.html",
  styleUrls: ["./sales-ui.component.scss"],
})
export class PosSalesUIComponent implements OnInit {
  constructor(globals: PosGlobals, private https: HttpsService) {
    globals.page = "sales";
    console.log(globals.page);
  }

  ngOnInit() {
    this.https.enforce();
  }
}
