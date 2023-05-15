import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { DonutChartOptions } from '../../../model';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonutChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input() chartOptions: Partial<DonutChartOptions>;

  constructor() {
   }

  ngOnInit() {
  }

}
