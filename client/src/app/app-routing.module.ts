import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./portfolio/home/home.component";
import { PosSalesUIComponent } from "./pos/components/sales-ui/sales-ui.component";
import { PosAdminUIComponent } from "./pos/components/admin-ui/admin-ui.component";
import { LmsHomeComponent } from "./lms/screens/lms-home/lms-home.component";
import { LoginComponent } from "./lms/screens/login/login.component";
import { RegisterUserComponent } from "./lms/screens/register-user/register-user.component";
import { CoursesComponent } from "./lms/screens/courses/courses.component";
import { SessionComponent } from "./lms/screens/session/session.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  // Pos
  { path: "pos", component: PosSalesUIComponent },
  { path: "pos-admin", component: PosAdminUIComponent },
  // LMS
  { path: "lms", component: LmsHomeComponent },
  { path: "lms/login", component: LoginComponent },
  { path: "lms/register", component: RegisterUserComponent },
  { path: "lms/courses", component: CoursesComponent },
  { path: "lms/session", component: SessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
