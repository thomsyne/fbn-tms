import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { ViewDashboardGuard } from "src/app/core/guards";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("../dashboards/components/dashboard/dashboard.module").then(
          m => m.DashboardModule
        ),
        canActivate: [ViewDashboardGuard]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
