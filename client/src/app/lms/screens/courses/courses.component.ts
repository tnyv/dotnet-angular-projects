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
    // Ping server to make sure jwt is still valid before getting registered courses
    this.httpUser.ping(localStorage.getItem("jwt")).then(
      () => {
        return this.httpCourse.getAllCourses();
      },
      (reject) => {
        // User jwt expired. Sign user out
        //  this.httpUser.signOut();
      }
    );
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
