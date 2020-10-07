import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpsService {
  constructor() {}

  enforce() {
    if (environment.production) {
      var currentUrl = window.location.href;
      var newUrl = "https://";
      if (currentUrl.charAt(4) == ":") {
        currentUrl = currentUrl.substring(7, currentUrl.length);
        newUrl += currentUrl;
        window.location.href = newUrl;
      }
    }
  }
}
