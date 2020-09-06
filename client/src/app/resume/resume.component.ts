import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { Router, NavigationEnd } from "@angular/router";
import { Globals } from '../globals';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger("slideSide", [
      transition(":enter", [
        style({ transform: "translateX(-120%)" }),
        animate("200ms ease-in", style({ transform: "translateX(0%)" })),
        
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateX(-100%)" }))
      ])
    ])
  ]
})
export class ResumeComponent implements OnInit {

  slideIn: boolean = false;

  constructor(private router: Router, globals: Globals) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.slideInHome();
      }
    });

    globals.title = "Resume";
  }

  ngOnInit() {}

  slideInHome() {
    this.slideIn = !this.slideIn;
  }

}
