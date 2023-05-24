import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { DynamicTableModule } from "src/app/shared/dynamic-table";
import { ModalModule } from "src/app/shared/modal";
import { SkeletonModule } from "src/app/shared/skeleton";
import { UtilityModule } from "src/app/shared/utility";
import { AllTerminalsComponent } from "./components/all-terminals/all-terminals.component";
import { CreateTerminalComponent } from "./components/create-terminal/create-terminal.component";
import { TerminalsContainerComponent } from "./components/terminals-container/terminals-container.component";
import { TerminalsRoutingModule } from "./terminals-routing.module";
import { TerminalDetailsComponent } from "./components/terminal-details/terminal-details.component";

@NgModule({
    declarations: [
      TerminalsContainerComponent,
      AllTerminalsComponent,
      CreateTerminalComponent,
      TerminalDetailsComponent
    ],
    imports: [
      CommonModule,
      TerminalsRoutingModule,
      DynamicTableModule,
      UtilityModule,
      SkeletonModule,
      DynamicFormModule,
      ModalModule
    ]
  })
  export class TerminalsModule { }