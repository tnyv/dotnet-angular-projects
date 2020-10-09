import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LmsHomeComponent } from "./lms/screens/lms-home/lms-home.component";
import { LoginComponent } from "./lms/screens/login/login.component";
import { RegisterUserComponent } from "./lms/screens/register-user/register-user.component";
import { CoursesComponent } from "./lms/screens/courses/courses.component";
import { SessionComponent } from "./lms/screens/session/session.component";
import { LmsAdminComponent } from "./lms/screens/lms-admin/lms-admin.component";
const routes: Routes = [
  { path: "", component: LmsHomeComponent },
  { path: "lms/login", component: LoginComponent },
  { path: "lms/register", component: RegisterUserComponent },
  { path: "lms/courses", component: CoursesComponent },
  { path: "lms/session", component: SessionComponent },
  { path: "lms/admin", component: LmsAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
