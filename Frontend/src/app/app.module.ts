// Home / Portfolio
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { LmsHomeComponent } from "./lms/screens/lms-home/lms-home.component";
import { LmsNavComponent } from "./lms/components/lms-nav/lms-nav.component";
import { LoginComponent } from "./lms/screens/login/login.component";
import { RegisterUserComponent } from "./lms/screens/register-user/register-user.component";
import { CoursesComponent } from "./lms/screens/courses/courses.component";
import { AdminPanelComponent } from "./lms/components/admin-panel/admin-panel.component";
import { RegistrationsComponent } from "./lms/components/registrations/registrations.component";
import { SessionComponent } from "./lms/screens/session/session.component";
import { LmsAdminComponent } from './lms/screens/lms-admin/lms-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LmsHomeComponent,
    LmsNavComponent,
    LoginComponent,
    RegisterUserComponent,
    CoursesComponent,
    AdminPanelComponent,
    RegistrationsComponent,
    SessionComponent,
    LmsAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
