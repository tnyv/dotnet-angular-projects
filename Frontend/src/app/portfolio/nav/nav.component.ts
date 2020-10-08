import { Component, OnInit } from '@angular/core';
import { PortfolioState } from "../portfolio-state";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public state: PortfolioState) { }

  ngOnInit() {
  }

    // Method returns style class based on navbar Global's state
    setNavAbout() {
      let activeClass = {
        aboutActive: this.state.page === "about",
      };
      return activeClass;
    }
  
    setNavProjects() {
      let activeClass = {
        projectsActive: this.state.page === "projects",
      };
      return activeClass;
    }

    setNavContact() {
      let activeClass = {
        contactActive: this.state.page === "contact",
      };
      return activeClass;
    }

}
