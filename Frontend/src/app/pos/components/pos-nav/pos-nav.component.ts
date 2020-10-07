import { Component, OnInit } from "@angular/core";
import { PosGlobals } from "../../pos-globals";

@Component({
  selector: "app-pos-nav",
  templateUrl: "./pos-nav.component.html",
  styleUrls: ["./pos-nav.component.scss"],
})
export class PosNavComponent implements OnInit {
  constructor(public globals: PosGlobals) {}

  ngOnInit() {}

  // Method returns style class based on navbar Global's state
  setSales() {
    let activeClass = {
      sales: this.globals.page === "sales",
    };
    return activeClass;
  }

  setAdmin() {
    let activeClass = {
      admin: this.globals.page === "admin",
    };
    return activeClass;
  }
}
