import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { RegistrationsService } from "../../services/registrations/registrations.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(
    public httpCourse: CourseService,
    public httpRegistrations: RegistrationsService
  ) {}

  ngOnInit() {
    this.httpCourse.getAllCourses().then(
      () => {
        return;
      },
      (reject) => {
        console.log("Server error");
      }
    );
  }

  enroll(courseId) {
    if (localStorage.getItem("isLogged") == "true") {
      console.log("enroll");
      this.httpRegistrations.registerCourse(
        courseId,
        localStorage.getItem("jwt")
      );
    } else {
      alert("You need to sign in first to enroll in a course.");
    }
  }
}
