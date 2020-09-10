import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lms-nav',
  templateUrl: './lms-nav.component.html',
  styleUrls: ['./lms-nav.component.scss']
})
export class LmsNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogged = localStorage.getItem("isLogged") == "true" ? true : false; 
  }

  isLogged: boolean;

  signOut() {
    localStorage.clear();
    this.router.navigate(["/lms"]);
  }
}
