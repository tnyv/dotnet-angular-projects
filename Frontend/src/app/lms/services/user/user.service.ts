import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  private baseUrl = environment.production
    ? "https://tonyvu.dev/api/lms/user"
    : "http://localhost:58471/api/lms/user";

  users: User[];

  login(email: string, password: string) {
    const headers = { "Content-Type": "application/json" };
    const body = { email: email, password: password };

    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseUrl + "/login", body, { headers })
        .subscribe(
          (res: Response) => {
            // Converting returned JSON into parsable object
            var response = JSON.parse(JSON.stringify(res));

            // Store jwt first so that it can be used in getUserData(email, jwt)
            localStorage.setItem("jwt", response.data);
            localStorage.setItem("isLogged", "true");

            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
  }

  // Get and store user data upon successful login
  getUserData(email: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };
    return new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/" + email, { headers })
        .toPromise()
        .then(
          (res) => {
            //Converting returned JSON into parsable object
            var response = JSON.parse(JSON.stringify(res));

            // Save user data in local storage
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("firstName", response.data.firstName);
            localStorage.setItem("lastName", response.data.lastName);
            localStorage.setItem("organization", response.data.organization);
            localStorage.setItem("role", response.data.role);
            resolve();
          },
          (error) => {
            reject();
          }
        );
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
