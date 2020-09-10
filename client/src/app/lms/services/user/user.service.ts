import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { User } from "../../models/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl = "https://tonyvu.dev/api/lms/user";
    } else {
      this.baseUrl = "http://localhost:58471/api/lms/user";
    }
  }

  private baseUrl: string;

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

            // Get and store user data upon successful login
            this.getUserData(email, response.data);
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
  }

  getUserData(email: string, jwt: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt,
    };

    this.http
      .get(this.baseUrl + "/" + email, { headers })
      .toPromise()
      .then((res) => {
        //Converting returned JSON into parsable object
        var response = JSON.parse(JSON.stringify(res));

        // Save user data in local storage
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        localStorage.setItem("organization", response.data.organization);
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
