import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from "../../models/course";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {}

  // Production vs development server
  //private baseUrl = "http://localhost:58471/api/lms/course";
  private baseUrl = "https://tonyvu.dev/api/lms/course";

  allCourses: Course[];

  getAllCourses() {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/getall", { headers })
        .toPromise()
        .then((res) => {
          var response = JSON.parse(JSON.stringify(res));
          this.allCourses = response.data as Course[];
          resolve();
        }),
        (error) => {
          reject();
        };
    });
  }
}
