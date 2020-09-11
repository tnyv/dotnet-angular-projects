import { Component, OnInit } from "@angular/core";
import { RegistrationsService } from "../../services/registrations/registrations.service";

@Component({
  selector: "app-registrations",
  templateUrl: "./registrations.component.html",
  styleUrls: ["./registrations.component.scss"],
})
export class RegistrationsComponent implements OnInit {
  constructor(private httpRegistrations: RegistrationsService) {}

  ngOnInit() {
    if (localStorage.getItem("isLogged") == "true")
      this.httpRegistrations.getRegistrations(localStorage.getItem("jwt")).then(
        () => {
          return this.success();
        },
        (reject) => {
          console.log("Server error");
        }
      );
  }

  success() {
    console.log(this.httpRegistrations.registrations);
  }
}
