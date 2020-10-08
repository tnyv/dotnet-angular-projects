import { Component, OnInit } from "@angular/core";
import { PortfolioState } from "../portfolio-state";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  constructor(public state: PortfolioState) {
    state.page = "projects"
  }

  ngOnInit() {}
}
