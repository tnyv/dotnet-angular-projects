import { Component, OnInit } from "@angular/core";
import { HttpsService } from "../../../https.service";

@Component({
  selector: "app-lms-home",
  templateUrl: "./lms-home.component.html",
  styleUrls: ["./lms-home.component.scss"],
})
export class LmsHomeComponent implements OnInit {
  constructor(private https: HttpsService) {}

  ngOnInit() {
    this.https.enforce();
    this.isLogged = localStorage.getItem("isLogged") == "true" ? true : false;
    if (this.isLogged) {
      this.firstName = localStorage.getItem("firstName");
    }
  }

  isLogged: boolean;
  firstName: string;
}
