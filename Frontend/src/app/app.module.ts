// Home / Portfolio
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./portfolio/home/home.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";
import { ContactComponent } from "./portfolio/contact/contact.component";
import { ResumeComponent } from "./portfolio/resume/resume.component";
import { PortfolioState } from "./portfolio/portfolio-state";

// POS
import { ToastrModule } from "ngx-toastr";
import { PosNavComponent } from "./pos/components/pos-nav/pos-nav.component";
import { PosSalesUIComponent } from "./pos/components/sales-ui/sales-ui.component";
import { PosAdminUIComponent } from "./pos/components/admin-ui/admin-ui.component";
import { PosGlobals } from "./pos/pos-globals";
import { ItemsDisplayComponent } from "./pos/components/sales-ui/items-display/items-display.component";
import { RegisterComponent } from "./pos/components/sales-ui/register/register.component";
import { MenuBtnsComponent } from "./pos/components/sales-ui/menu-btns/menu-btns.component";
import { RegisterService } from "./pos/services/register.service";

// LMS
import { LmsHomeComponent } from "./lms/screens/lms-home/lms-home.component";
import { LmsNavComponent } from "./lms/components/lms-nav/lms-nav.component";
import { LoginComponent } from "./lms/screens/login/login.component";
import { RegisterUserComponent } from "./lms/screens/register-user/register-user.component";
import { CoursesComponent } from "./lms/screens/courses/courses.component";
import { AdminPanelComponent } from "./lms/components/admin-panel/admin-panel.component";
import { RegistrationsComponent } from "./lms/components/registrations/registrations.component";
import { SessionComponent } from "./lms/screens/session/session.component";
import { LmsAdminComponent } from './lms/screens/lms-admin/lms-admin.component';
import { NavComponent } from './portfolio/nav/nav.component';

@NgModule({
  declarations: [
    // Home / Portfolio
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent,
    // Pos
    PosNavComponent,
    PosSalesUIComponent,
    PosAdminUIComponent,
    ItemsDisplayComponent,
    RegisterComponent,
    MenuBtnsComponent,
    // LMS
    LmsHomeComponent,
    LmsNavComponent,
    LoginComponent,
    RegisterUserComponent,
    CoursesComponent,
    AdminPanelComponent,
    RegistrationsComponent,
    SessionComponent,
    LmsAdminComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),

  ],
  providers: [PosGlobals, RegisterService, PortfolioState],
  bootstrap: [AppComponent],
})
export class AppModule {}
