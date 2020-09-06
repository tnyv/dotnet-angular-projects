import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  // PRODUCTION LINK: private baseUrl = 'https://tonyvu.dev';
  // DEBUG LINK: private baseUrl = "https://localhost:44370/message";
  private baseUrl = "https://tonyvu.dev/message";

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, subject: string, messageBody: string){
    const headers = { "Content-Type": "application/json" };
    const body = {
      name: name,
      email: email,
      subject: subject,
      messageBody: messageBody
    };

    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseUrl, body, { headers })
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
}
