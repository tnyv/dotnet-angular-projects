import { Component, OnInit } from "@angular/core";
import { RegistrationsService } from "../../services/registrations/registrations.service";
import { CourseService } from "../../services/course/course.service";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registrations",
  templateUrl: "./registrations.component.html",
  styleUrls: ["./registrations.component.scss"],
})
export class RegistrationsComponent implements OnInit {
  constructor(
    public httpRegistrations: RegistrationsService,
    public httpCourse: CourseService,
    public httpUser: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    // Ping server to make sure jwt is still valid before getting registered courses
    this.httpUser.ping(localStorage.getItem("jwt")).then(
      () => {
        return this.getAllCourses();
      },
      (reject) => {
        // User jwt expired. Sign user out
        this.httpUser.signOut();
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

  navigateToSession(courseId: string) {
    this.router.navigate(['/lms/session'], { state: { courseId: courseId } });
  }
}
