import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsContainerComponent } from "./components/reports-container/reports-container.component";
import { ReportsTypesComponent } from "./components/reports-types/reports-types.component";
import { MerchantReportTableComponent } from "./components/report-pages/merchant-report/merchant-report-table/merchant-report-table.component";
import { MerchantDetailsComponent } from "../merchants/components/merchant-details/merchant-details.component";
import { MerchantReportDetailsComponent } from "./components/report-pages/merchant-report/merchant-report-details/merchant-report-details.component";

const routes: Routes = [
    {
      path: "",
      component: ReportsContainerComponent,
      children: [
        {
          path: "",
          component: ReportsTypesComponent,
        },
        {
          path: "merchants",
          children: [
            {
              path: "",
              component: MerchantReportTableComponent,
            },
            {
              path: ":id/merchant-report",
              component: MerchantReportDetailsComponent,
            },
          ]
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
  export class ReportsRoutingModule {}