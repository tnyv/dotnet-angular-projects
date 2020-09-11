import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RegistrationsService {
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl = "https://tonyvu.dev/api/lms/registration";
    } else {
      this.baseUrl = "http://localhost:58471/api/lms/registration";
    }
  }

  private baseUrl: string;
  registrations: number[] = [];

  // Get all current logged user's course registrations. This method retrieves the
  // registrations associated with the current user (via their jwt) and stores
  // all courseIds (ints) in the registrations [] array. This will be used to
  // display user's enrolled courses and for taking a course on the activecourse screen. 
  getRegistrations(jwt: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/getall", { headers })
        .toPromise()
        .then((res) => {
          var response = JSON.parse(JSON.stringify(res));

          for (var i = 0; i < response.data.length; i++) {
            this.registrations.push(response.data[i].courseId)
          }

          resolve();
        }),
        (error) => {
          reject();
        };
    });
  }
}
