import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { DynamicTableModule } from "src/app/shared/dynamic-table";
import { ModalModule } from "src/app/shared/modal";
import { SkeletonModule } from "src/app/shared/skeleton";
import { UtilityModule } from "src/app/shared/utility";
import { VerifyModalComponent } from "./components/verify-modal/verify-modal.component";

@NgModule({
    declarations: [
      VerifyModalComponent
    ],
    imports: [
      CommonModule,
      UtilityModule,
      SkeletonModule,
      DynamicFormModule,
      ModalModule
    ],
    exports: [VerifyModalComponent]
  })
  export class OtpVerifyModule { }