import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from 'src/app/shared/utility';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { DonutChartComponent } from '../charts/donut-chart/donut-chart.component';

const routes: Routes = [

  {
    path: "",
    component: DashboardComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    NgApexchartsModule
  ],
  declarations: [BarChartComponent, DonutChartComponent, DashboardComponent]
})
export class DashboardModule { }
