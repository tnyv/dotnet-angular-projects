import { Component, OnInit } from "@angular/core";
import { PortfolioState } from "../portfolio-state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public state: PortfolioState) {
    state.page = "about"
  }

  ngOnInit() {}
}
