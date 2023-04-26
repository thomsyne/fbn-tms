import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexPlotOptions, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexLegend } from "ng-apexcharts";
import { LabelledDropdownParameters } from "src/app/shared/utility";

export interface DashboardSummaryData {
  value: number;
  image: string;
  tagline: string;
  isAmount: boolean;
}

export const filterParameters: LabelledDropdownParameters = {
  items: [
    { key: "24 Hours", value: 1 },
    { key: "7 Days", value: 7 },
    { key: "30 Days", value: 30 },
  ],
  label: "Filter by",
  current: 30,
};

export interface BarChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  fill?: ApexFill,
  colors: any[]
}

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions,
  colors?: any[],
  legend?: ApexLegend
};