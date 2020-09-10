import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  constructor(private httpCourse: CourseService) {}

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
    } else {
      alert("You need to sign in first to enroll in a course.");
    }
  }
}
