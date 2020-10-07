import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-lms-nav",
  templateUrl: "./lms-nav.component.html",
  styleUrls: ["./lms-nav.component.scss"],
})
export class LmsNavComponent implements OnInit {
  constructor(private router: Router, public httpUser: UserService) {}

  ngOnInit() {
    this.isLogged = localStorage.getItem("isLogged") == "true" ? true : false;
    this.role = localStorage.getItem("role");
  }

  isLogged: boolean;
  role: string;

  signOut() {
    localStorage.clear();
    this.router.navigate(["/lms/login"]);
  }
}
