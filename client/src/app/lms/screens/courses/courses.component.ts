import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { UserService } from "../../services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(
    private router: Router,
    public httpCourse: CourseService,
    public httpUser: UserService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("isLogged")) {
      this.httpCourse.getUserCourses();
    } else {
      this.httpCourse.getAllCourses();
    }
  }

  async enroll(courseId) {
    if (localStorage.getItem("isLogged") == "true") {
      // Check if already registered for course.
      if (this.httpCourse.registrations.includes(courseId)) {
        alert("You're already registered for this course.");
      } else {
        await this.httpCourse.registerCourse(courseId, localStorage.getItem("jwt"));
        alert("Course has been successfully registered.");
        location.reload();
      }
    } else {
      alert("You need to sign in first to enroll in a course.");
      this.router.navigate(["/lms/login"]);
    }
  }
}
