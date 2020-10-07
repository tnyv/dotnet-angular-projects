import { Component, OnInit } from "@angular/core";
import { HttpsService } from "../../https.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private https: HttpsService) {}

  ngOnInit() {
    this.https.enforce();
  }
}
