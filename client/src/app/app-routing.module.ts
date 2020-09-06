import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./portfolio/home/home.component";
import { SalesUIComponent } from "./pos/components/sales-ui/sales-ui.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pos", component: SalesUIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
