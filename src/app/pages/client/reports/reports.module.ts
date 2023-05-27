import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { DynamicTableModule } from "src/app/shared/dynamic-table";
import { ModalModule } from "src/app/shared/modal";
import { SkeletonModule } from "src/app/shared/skeleton";
import { UtilityModule } from "src/app/shared/utility";
import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsTypesComponent } from "./components/reports-types/reports-types.component";
import { ReportsContainerComponent } from "./components/reports-container/reports-container.component";

@NgModule({
  declarations: [
    ReportsTypesComponent, 
    ReportsContainerComponent
],
  imports: [
    CommonModule,
    DynamicTableModule,
    ReportsRoutingModule,
    UtilityModule,
    SkeletonModule,
    DynamicFormModule,
    ModalModule,
  ],
})
export class ReportsModule {}
