import { Component, OnInit } from "@angular/core";
import { PosGlobals } from "../../pos-globals";
import { SalesService } from "../../services/sales.service";

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class PosAdminUIComponent implements OnInit {


  ngOnInit() {
    this.salesService.refreshSalesList();
  }

  constructor(globals: PosGlobals, public salesService: SalesService) {
    globals.page = "admin";
  }
}
