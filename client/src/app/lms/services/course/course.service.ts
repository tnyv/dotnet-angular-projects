import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../../models/course";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl = "https://tonyvu.dev/api/lms/course";
    } else {
      this.baseUrl = "http://localhost:58471/api/lms/course";
    }
  }

  allCourses: Course[];
  private baseUrl: string;

  getAllCourses() {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/getall", { headers })
        .toPromise()
        .then((res) => {
          //Converting returned JSON into parsable object
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
