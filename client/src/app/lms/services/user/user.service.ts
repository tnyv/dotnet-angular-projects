import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { User } from "../../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  // PRODUCTION LINK: private baseUrl = 'https://tonyvu.dev/api/lms/user';
  // DEBUG LINK: private baseUrl = "https://localhost:58471/api/lms/user";
  private baseUrl = "http://localhost:58471/api/lms/user";

  users: User[];

  login(email: string, password: string) {
    const headers = { "Content-Type": "application/json" };
    const body = { email: email, password: password };

    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseUrl + "/login", body, { headers })
        .subscribe((res: Response) => {

          // Converting returned JSON into parsable object
          var response = JSON.parse(JSON.stringify(res));

          // Storing jwt in browser's localstorage
          localStorage.setItem("jwt", response.data);

          resolve();
        },
        (error) => {
          reject();
        });
    });
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    organization: string
  ) {
    const headers = { "Content-Type": "application/json" };
    const body = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      organization: organization,
    };

    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseUrl + "/register", body, { headers })
        .subscribe(
          (res: Response) => {
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
  }

  getUsers() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    // headers.append("Authorization", "Bearer " + this.state.jwt);

    // Promise used so that api call finishes before executing another function
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + "/getall", { headers: headers }).subscribe(
        (res: Response) => {
          console.log(res);

          // Converting returned JSON into parsable object
          var response = JSON.parse(JSON.stringify(res));
          this.users = response.data;
          resolve();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
