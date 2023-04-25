import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
    {
      path: "auth",
      component: LayoutComponent,
      children: [
        {
          path: "login",
          component: LoginComponent,
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
  export class AuthRoutingModule {}