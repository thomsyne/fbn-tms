import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { DynamicTableModule } from "src/app/shared/dynamic-table";
import { ModalModule } from "src/app/shared/modal";
import { SkeletonModule } from "src/app/shared/skeleton";
import { UtilityModule } from "src/app/shared/utility";
import { MerchantsRoutingModule } from "./merchants-routing.module";
import { AllMerchantsComponent } from "./components/all-merchants/all-merchants.component";
import { MerchantsContainerComponent } from "./components/merchants-container/merchants-container.component";

@NgModule({
    declarations: [
      AllMerchantsComponent,
      MerchantsContainerComponent
    ],
    imports: [
      CommonModule,
      MerchantsRoutingModule,
      DynamicTableModule,
      UtilityModule,
      SkeletonModule,
      DynamicFormModule,
      ModalModule
    ]
  })
  export class MerchantsModule { }