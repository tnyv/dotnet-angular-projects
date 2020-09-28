import { Component, OnInit } from "@angular/core";

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
      window.location.href = "https://vutony.com";
    }
  }

  currentURL: string = "";
}
