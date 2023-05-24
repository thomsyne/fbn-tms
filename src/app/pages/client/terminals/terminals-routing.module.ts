import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllTerminalsComponent } from "./components/all-terminals/all-terminals.component";
import { TerminalsContainerComponent } from "./components/terminals-container/terminals-container.component";
import { CreateTerminalComponent } from "./components/create-terminal/create-terminal.component";
import { TerminalDetailsComponent } from "./components/terminal-details/terminal-details.component";

const routes: Routes = [
    {
      path: "",
      component: TerminalsContainerComponent,
      children: [
        {
          path: "",
          component: AllTerminalsComponent,
        },
        {
          path: "create",
          component: CreateTerminalComponent,
        },
        {
          path: ":terminalId/details",
          component: TerminalDetailsComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
  })
  export class TerminalsRoutingModule {}