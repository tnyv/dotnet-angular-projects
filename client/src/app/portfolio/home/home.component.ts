import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Redirect to https if http
    this.currentURL = window.location.href;
    if (this.currentURL.charAt(4) == ":") {
      if (environment.production) {
        window.location.href = "https://vutony.com";
      }
    }
    console.log("In production: " + environment.production)
  }

  currentURL: string = "";
}
