import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { RegistrationsService } from "../../services/registrations/registrations.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(
    public httpCourse: CourseService,
    public httpRegistrations: RegistrationsService,
    public httpUser: UserService
  ) {}

  ngOnInit() {
    // Ping server to make sure jwt is still valid before getting registered courses
    this.httpUser.ping(localStorage.getItem("jwt")).then(
      () => {
        return this.getAllCourses();
      },
      (reject) => {
        // User jwt expired. Sign user out
       //  this.httpUser.signOut();
      }
    );
  }

  getAllCourses() {
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

  enroll(courseId) {
    if (localStorage.getItem("isLogged") == "true") {
      // Check if already registered for course.

      if (this.httpRegistrations.registrations.includes(courseId)) {
        alert("You're already registered for this course.");
      } else {
        this.httpRegistrations.registerCourse(
          courseId,
          localStorage.getItem("jwt")
        );

        alert("Course has been successfully registered.");
        location.reload();
      }
    } else {
      alert("You need to sign in first to enroll in a course.");
    }
  }
}
