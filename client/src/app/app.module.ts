// Home / Portfolio
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./portfolio/home/home.component";
import { PortfolioNavComponent } from "./portfolio/portfolio-nav/portfolio-nav.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { HeaderComponent } from "./portfolio/header/header.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";
import { ContactComponent } from "./portfolio/contact/contact.component";
import { ResumeComponent } from "./portfolio/resume/resume.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ParticlesModule } from "angular-particle";

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
import { ProfileComponent } from "./lms/screens/profile/profile.component";
import { RegisterUserComponent } from "./lms/screens/register-user/register-user.component";
import { CoursesComponent } from "./lms/screens/courses/courses.component";
import { AdminPanelComponent } from "./lms/components/admin-panel/admin-panel.component";
import { RegistrationsComponent } from "./lms/components/registrations/registrations.component";
import { SessionComponent } from "./lms/screens/session/session.component";

@NgModule({
  declarations: [
    // Home / Portfolio
    AppComponent,
    HomeComponent,
    PortfolioNavComponent,
    HeaderComponent,
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
    ProfileComponent,
    RegisterUserComponent,
    CoursesComponent,
    AdminPanelComponent,
    RegistrationsComponent,
    SessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    MatProgressSpinnerModule,
    ParticlesModule,
  ],
  providers: [PosGlobals, RegisterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
