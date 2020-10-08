import { Component, OnInit } from "@angular/core";
import { EmailService } from "../services/email.service";
import { PortfolioState } from "../portfolio-state";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor(
    public emailService: EmailService,
    public state: PortfolioState
  ) {
    state.page = "contact"
  }

  name: string = "";
  email: string = "";
  subject: string = "";
  messageBody: string = "";

  formValid: boolean = true;
  emailValid: boolean = true;
  messageSent: boolean = false;
  loading: boolean = false;

  isValid(): boolean {
    this.formValid = true;
    this.emailValid = true;
    var isValid = true;

    if (this.name == "") {
      this.formValid = false;
      isValid = false;
    }

    if (this.subject == "") {
      this.formValid = false;
      isValid = false;
    }

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!EMAIL_REGEXP.test(this.email)) {
      this.emailValid = false;
      isValid = false;
    }

    if (this.messageBody == "") {
      this.formValid = false;
      isValid = false;
    }

    return isValid;
  }

  ngOnInit() {}

  onSubmit($event) {
    $event.preventDefault();
    this.loading = true;
    if (this.isValid()) {
      this.emailService
        .sendEmail(this.name, this.email, this.subject, this.messageBody)
        .then(
          () => {
            return this.respond();
          },
          (reject) => {
            console.log("Something went wrong");
          }
        );
    } else {
      this.loading = false;
    }
  }

  respond() {
    this.loading = false;
    this.messageSent = true;
  }
}
