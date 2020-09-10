import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public httpUser: UserService, private router: Router) {}

  ngOnInit() {}

  email: string = "";
  password: string = "";

  emailValid: boolean = true;
  pwValid: boolean = true;
  loginValid: boolean = true;
  loading: boolean = false;

  private onSubmit(event: Event) {
    event.preventDefault();

    if (this.isValid()) {
      this.loading = true;
      // Using Promise in httpLogin.getUsers() so that api call finishes before executing next method
      this.httpUser.login(this.email, this.password).then(
        () => {
          return this.getUserData();
        },
        (reject) => {
          this.loading = false;
          this.loginValid = false;
        }
      );
    }
  }

  getUserData() {
    this.httpUser.getUserData(this.email).then(
      () => {
        return this.success();
      },
      (reject) => {
        console.log("Server error")
      }
    );
  }

  success() {
    this.loading = false;
    this.router.navigate(["/lms"]);
  }

  isValid() {
    this.refresh();
    var isValid = true;

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!EMAIL_REGEXP.test(this.email)) {
      this.emailValid = false;
      isValid = false;
    }

    if (this.email == "") {
      this.emailValid = false;
      isValid = false;
    }

    if (this.password == "") {
      this.pwValid = false;
      isValid = false;
    }

    return isValid;
  }

  refresh() {
    this.loginValid = true;
    this.emailValid = true;
    this.pwValid = true;
  }
}
