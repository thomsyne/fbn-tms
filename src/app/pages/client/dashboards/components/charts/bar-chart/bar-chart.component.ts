import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BarChartOptions } from '../../../model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  @Input() chartOptions: Partial<BarChartOptions>;

  constructor() {
   }

  ngOnInit() {
  }



}
