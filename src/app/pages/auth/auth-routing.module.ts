import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";
import { EmailVerificationComponent } from "./email-verification/email-verification.component";
import { QrCodeComponent } from "./qr-code/qr-code.component";

const routes: Routes = [
  {
    path: "auth",
    component: LayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      { path: "email-verification", component: EmailVerificationComponent },
      { path: "qr-page", component: QrCodeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
