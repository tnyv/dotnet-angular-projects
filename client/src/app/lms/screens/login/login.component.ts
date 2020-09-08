import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public httpUser: UserService) {}

  ngOnInit() {}

  email: string = "";
  password: string = "";

  emailValid: boolean = true;
  pwValid: boolean = true;
  loginValid: boolean = true;

  private onSubmit(event: Event) {
    event.preventDefault();

    if (this.isValid()) {
      // Using Promise in httpLogin.getUsers() so that api call finishes before executing next method
      this.httpUser.login(this.email, this.password).then(
        () => {
          return this.success();
        },
        (reject) => {
          this.loginValid = false;
        }
      );
    }
  }

  success() {
    console.log("Successfully logged in");
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
