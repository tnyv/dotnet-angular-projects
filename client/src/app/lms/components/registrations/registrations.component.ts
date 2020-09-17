import { Component, OnInit } from "@angular/core";
import { RegistrationsService } from "../../services/registrations/registrations.service";
import { CourseService } from "../../services/course/course.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-registrations",
  templateUrl: "./registrations.component.html",
  styleUrls: ["./registrations.component.scss"],
})
export class RegistrationsComponent implements OnInit {
  constructor(
    private httpRegistrations: RegistrationsService,
    private httpCourse: CourseService,
    private httpUser: UserService
  ) {}

  ngOnInit() {

    this.httpUser.ping(localStorage.getItem('jwt')).then(
      () => {
        return this.getRegistrations();
      },
      (reject) => {
        console.log("jwt expired");
      }
    );
    
  }




  getAllCourses(){
    this.httpCourse.getAllCourses().then(
      () => {
        return this.getRegistrations();
      },
      (reject) => {
        console.log("Server error");
      }
    );
  }

  getRegistrations() {
    if (localStorage.getItem("isLogged") == "true")
      this.httpRegistrations.getRegistrations(localStorage.getItem("jwt")).then(
        () => {
          return;
        },
        (reject) => {
          console.log("Server error");
        }
      );
  }
}
