import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lms-home",
  templateUrl: "./lms-home.component.html",
  styleUrls: ["./lms-home.component.scss"],
})
export class LmsHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.isLogged = localStorage.getItem("isLogged") == "true" ? true : false;
    if (this.isLogged) {
      this.firstName = localStorage.getItem("firstName");
    }
  }

  isLogged: boolean;
  firstName: string;
}
