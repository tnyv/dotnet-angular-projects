import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "../../models/course";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {}

  // Production vs development server
  private baseUrl = "http://localhost:58471/api/lms/";
  //private baseUrl = "https://tonyvu.dev/api/lms/";

  // registrations array only stores courseId's
  // registeredCourses stores entire courses based on what is inside of registrations array
  registrations: number[] = [];
  registeredCourses: Course[] = [];

  allCourses: Course[];

  // Populates allCourses array with all possible courses on platform
  getAllCourses() {
    const headers = {
      "Content-Type": "application/json",
    };

    this.http
      .get(this.baseUrl + "course/getall", { headers })
      .toPromise()
      .then((res) => {
        var response = JSON.parse(JSON.stringify(res));
        this.allCourses = response.data as Course[];
      });
  }

  // Get all current logged user's course registrations. This method retrieves the
  // registrations associated with the current user (via their jwt) and stores
  // all courseIds (ints) in the registrations [] array. This will be used to
  // display user's enrolled courses and for taking a course on the activecourse screen.
  getUserCourses(jwt: string) {
    this.getAllCourses();

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
      });
  }

  registerCourse(courseId: number, jwt: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    const body = { courseId: courseId };

    this.http
      .post<any>(this.baseUrl, body, { headers })
      .subscribe((res: Response) => {
        var response = JSON.parse(JSON.stringify(res));

        console.log(response.data);
      });
  }
}
