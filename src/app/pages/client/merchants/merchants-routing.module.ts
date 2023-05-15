import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MerchantsContainerComponent } from "./components/merchants-container/merchants-container.component";
import { AllMerchantsComponent } from "./components/all-merchants/all-merchants.component";

const routes: Routes = [
    {
      path: "",
      component: MerchantsContainerComponent,
      children: [
        {
          path: "",
          component: AllMerchantsComponent,
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
  export class MerchantsRoutingModule {}