import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/auth/auth.module").then(
        (m) => m.AuthModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    anchorScrolling: "enabled",
    relativeLinkResolution: "legacy",
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
