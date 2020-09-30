import { Component, ViewChild } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-portfolio-nav",
  templateUrl: "./portfolio-nav.component.html",
  styleUrls: ["./portfolio-nav.component.scss"],
})
export class PortfolioNavComponent {
  @ViewChild("drawer", { static: true }) drawer: MatSidenav;
  handSetState: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.breakpointObserver
      .observe(["(min-width: 600px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.handSetState = false;
        } else {
          this.handSetState = true;
        }
      });
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  scroll(id: string) {
    if (this.handSetState) {
      this.drawer.close();
      setTimeout(function () {
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth" });
      }, 1);
    }
    setTimeout(function () {
        let el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth" });
      }, 1);
  }
}
