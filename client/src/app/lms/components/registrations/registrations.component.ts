import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course/course.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registrations",
  templateUrl: "./registrations.component.html",
  styleUrls: ["./registrations.component.scss"],
})
export class RegistrationsComponent implements OnInit {
  isUnenroll: boolean = false;
  unenrollCourse: string;
  unenrollId: number;
  loading: boolean = false;

  constructor(public httpCourse: CourseService, private router: Router) {}

  async ngOnInit() {
    await this.httpCourse.getUserCourses();
  }

  navigateToSession(courseId: string) {
    this.router.navigate(["/lms/session"], { state: { courseId: courseId } });
  }

  unenrollClicked(unenrollId) {
    this.loading = true;
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
          this.httpCourse
            .unenroll(this.httpCourse.userRegistrations[i].id)
            .then(
              () => {
                return this.unenrollSuccess();
              },
              (reject) => {
                console.log("Server error");
              }
            );
        }
      }
    } else {
      this.isUnenroll = false;
      this.loading = false;
    }
  }

  unenrollSuccess() {
    console.log("what the");
    this.isUnenroll = false;
    this.loading = false;
    this.ngOnInit();
  }

  unenrollStyle() {
    let styles = {
      unenrollActive: this.isUnenroll,
      unenrollInactive: !this.isUnenroll,
    };
    return styles;
  }
}
