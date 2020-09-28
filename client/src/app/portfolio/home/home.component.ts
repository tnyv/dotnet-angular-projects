import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Redirect to https
    if(localStorage.getItem("https") !== "true") {
      localStorage.setItem("https", "true");
      window.location.href = "https://vutony.com";
    }
  }
}
