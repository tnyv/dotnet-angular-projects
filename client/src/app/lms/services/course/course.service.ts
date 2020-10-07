import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Course } from "../../models/course";
import { Registration } from "../../models/registration";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient, private router: Router) {}

  private baseUrl = environment.production
    ? "https://tonyvu.dev/api/lms/"
    : "http://localhost:58471/api/lms/";

  // registrations array only stores courseId's of user's registered courses
  // registeredCourses stores entire courses based on what is inside of registrations array
  registrations: number[] = [];
  registeredCourses: Course[] = [];
  userRegistrations: Registration[] = [];

  allCourses: Course[];

  // Populates allCourses array with all possible courses on platform
  getAllCourses() {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http
      .get(this.baseUrl + "course/getall", { headers })
      .toPromise()
      .then((res) => {
        var response = JSON.parse(JSON.stringify(res));
        this.allCourses = response.data as Course[];
      });
  }

  getUserRegistrations() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    return this.http
      .get(this.baseUrl + "registration/getall", { headers })
      .toPromise()
      .then((res) => {
        var response = JSON.parse(JSON.stringify(res));
        this.userRegistrations = response.data as Registration[];
      })
      .catch((err: HttpErrorResponse) => {
        // JWT expired, clear browser location and redirect to sign in page
        localStorage.clear();
        this.router.navigate(["/lms/login"]);
      });
  }

  // Get all current logged user's course registrations. This method retrieves the
  // registrations associated with the current user (via their jwt) and stores
  // all courseIds (ints) in the registrations [] array. This will be used to
  // display user's enrolled courses and for taking a course on the activecourse screen.
  async getUserCourses() {
    await this.getAllCourses();
    await this.getUserRegistrations();

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    this.http
      .get(this.baseUrl + "registration/getall", { headers })
      .toPromise()
      .then((res) => {
        var response = JSON.parse(JSON.stringify(res));

        // Clear the registrations and registeredCourse each time to prevent duplicates
        this.registrations = [];
        this.registeredCourses = [];

        // Put course Id's in registrations array
        for (var i = 0; i < response.data.length; i++) {
          if (!this.registrations.includes(response.data[i].courseId)) {
            this.registrations.push(response.data[i].courseId);
          }
        }

        // Cross check all course Id's and registration Id's, then add course
        // to registeredCourses if there's a match.
        for (var j = 0; j < this.allCourses.length; j++) {
          if (this.registrations.includes(this.allCourses[j].id)) {
            this.registeredCourses.push(this.allCourses[j]);
          }
        }
      })
      .catch((err: HttpErrorResponse) => {
        // JWT expired, clear browser location and redirect to sign in page
        localStorage.clear();
        this.router.navigate(["/lms/login"]);
      });
  }

  async registerCourse(courseId: number, jwt: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const body = { courseId: courseId };

    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + "registration", body, { headers })
        .subscribe(async (res: Response) => {
          var response = JSON.parse(JSON.stringify(res));
          console.log(response);
          await this.getUserCourses();
          resolve();
        });
    });
  }

  async unenroll(registrationId: number) {
    console.log("being unenrolled ID: " + registrationId);
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    return new Promise((resolve, reject) => {
      this.http
        .delete(this.baseUrl + "registration/" + registrationId, { headers })
        .subscribe(async (res: Response) => {
          var response = JSON.parse(JSON.stringify(res));
          console.log(response);
          await this.getUserCourses();
          resolve();
        });
    });
  }
}
