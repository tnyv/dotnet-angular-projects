import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-session",
  templateUrl: "./session.component.html",
  styleUrls: ["./session.component.scss"],
})
export class SessionComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    console.log(history.state.courseId);
  }
}
