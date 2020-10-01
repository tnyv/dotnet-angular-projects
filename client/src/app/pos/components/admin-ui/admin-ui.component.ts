import { Component, OnInit } from "@angular/core";
import { PosGlobals } from "../../pos-globals";
import { SalesService } from "../../services/sales.service";
import { HttpsService } from "../../../https.service";

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"],
})
export class PosAdminUIComponent implements OnInit {
  constructor(
    globals: PosGlobals,
    public salesService: SalesService,
    private https: HttpsService
  ) {
    globals.page = "admin";
  }

  ngOnInit() {
    this.https.enforce();
    this.salesService.refreshSalesList();
  }
}
