import { Component, OnInit } from "@angular/core";
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
    public httpCourse: CourseService,
    public httpUser: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.httpCourse.getUserCourses(localStorage.getItem("jwt"));
  }

  navigateToSession(courseId: string) {
    this.router.navigate(["/lms/session"], { state: { courseId: courseId } });
  }
}
