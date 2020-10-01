import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpsService } from "../../../https.service";

@Component({
  selector: "app-session",
  templateUrl: "./session.component.html",
  styleUrls: ["./session.component.scss"],
})
export class SessionComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private https: HttpsService
  ) {}

  ngOnInit() {
    this.https.enforce();
    console.log(history.state.courseId);
  }
}
