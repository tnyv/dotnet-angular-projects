import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(public httpCourse: CourseService, public httpUser: UserService) {}

  ngOnInit() {
    this.httpCourse.getAllCourses();
  }

  enroll(courseId) {
    if (localStorage.getItem("isLogged") == "true") {
      // Check if already registered for course.

      if (this.httpCourse.registrations.includes(courseId)) {
        alert("You're already registered for this course.");
      } else {
        this.httpCourse.registerCourse(courseId, localStorage.getItem("jwt"));

        alert("Course has been successfully registered.");
        location.reload();
      }
    } else {
      alert("You need to sign in first to enroll in a course.");
    }
  }
}
