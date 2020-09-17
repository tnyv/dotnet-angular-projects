import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-lms-nav",
  templateUrl: "./lms-nav.component.html",
  styleUrls: ["./lms-nav.component.scss"],
})
export class LmsNavComponent implements OnInit {
  constructor(private router: Router, private httpUser: UserService) {}

  ngOnInit() {
    this.isLogged = localStorage.getItem("isLogged") == "true" ? true : false;
  }

  isLogged: boolean;
}
