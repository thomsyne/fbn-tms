import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MerchantsContainerComponent } from "./components/merchants-container/merchants-container.component";
import { AllMerchantsComponent } from "./components/all-merchants/all-merchants.component";
import { CreateMerchantComponent } from "./components/create-merchant/create-merchant.component";
import { MerchantDetailsComponent } from "./components/merchant-details/merchant-details.component";

const routes: Routes = [
  {
    path: "",
    component: MerchantsContainerComponent,
    children: [
      {
        path: "",
        component: AllMerchantsComponent,
      },
      {
        path: "create",
        component: CreateMerchantComponent,
      },
      {
        path: ":merchantId/details",
        component: MerchantDetailsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsRoutingModule {}
