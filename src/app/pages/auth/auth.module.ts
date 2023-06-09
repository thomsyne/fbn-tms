import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { UtilityModule, AlertModule } from "src/app/shared/utility";
import { LayoutComponent } from "./layout/layout.component";
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
    declarations: [
      LoginComponent,
      LayoutComponent,
      EmailVerificationComponent,
      QrCodeComponent
    ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      UtilityModule,
      DynamicFormModule,
      AlertModule
    ],
  })
  export class AuthModule {}