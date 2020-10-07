import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";
import { HttpsService } from "../../../https.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private router: Router,
    public httpCourse: CourseService,
    public httpUser: UserService,
    private https: HttpsService
  ) {}

  ngOnInit() {
    this.https.enforce();
    if (localStorage.getItem("isLogged")) {
      this.httpCourse.getUserCourses();
    } else {
      this.httpCourse.getAllCourses();
    }
  }

  async enroll(courseId) {
    this.loading = true;
    if (localStorage.getItem("isLogged") == "true") {
      // Check if already registered for course.

      if (this.httpCourse.registrations.includes(courseId)) {
        alert("You're already registered for this course.");
        this.loading = false;
      } else {
        this.httpCourse
          .registerCourse(courseId, localStorage.getItem("jwt"))
          .then(
            () => {
              return this.enrollSuccess();
            },
            (reject) => {
              console.log("Server error");
            }
          );
      }
    } else {
      alert("You need to sign in first to enroll in a course.");
      this.router.navigate(["/lms/login"]);
    }
  }

  enrollSuccess() {
    this.loading = false;
    this.ngOnInit();
    alert("You have successfully enrolled in this course.")
  }
}
