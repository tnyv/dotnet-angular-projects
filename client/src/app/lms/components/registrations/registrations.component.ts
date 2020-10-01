import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { Router } from "@angular/router";
import { StylesCompileDependency } from "@angular/compiler";

@Component({
  selector: "app-registrations",
  templateUrl: "./registrations.component.html",
  styleUrls: ["./registrations.component.scss"],
})
export class RegistrationsComponent implements OnInit {
  isUnenroll: boolean = false;
  unenrollCourse: string;
  unenrollId: number;

  constructor(public httpCourse: CourseService, private router: Router) {}

  ngOnInit() {
    this.httpCourse.getUserCourses(localStorage.getItem("jwt"));
  }

  navigateToSession(courseId: string) {
    this.router.navigate(["/lms/session"], { state: { courseId: courseId } });
  }

  unenrollClicked(unenrollId) {
    this.isUnenroll = true;
    this.unenrollId = unenrollId;

    for (var i = 0; i < this.httpCourse.allCourses.length; i++) {
      if (this.httpCourse.allCourses[i].id == unenrollId) {
        this.unenrollCourse = this.httpCourse.allCourses[i].name;
      }
    }
  }

  async unenrollConfirm(confirmed: boolean) {
    if (confirmed) {
      for (var i = 0; i < this.httpCourse.registrations.length; i++) {
        if (this.httpCourse.userRegistrations[i].courseId == this.unenrollId) {
          await this.httpCourse.unenroll(this.httpCourse.userRegistrations[i].id);
          location.reload();
          break;
        }
      }
      this.isUnenroll = false;
    } else {
      this.isUnenroll = false;
    }
  }

  unenrollStyle() {
    let styles = {
      unenrollActive: this.isUnenroll,
      unenrollInactive: !this.isUnenroll,
    };
    return styles;
  }
}
