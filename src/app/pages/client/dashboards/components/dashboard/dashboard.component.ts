import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BarChartOptions, DashboardSummaryData, DonutChartOptions, filterParameters } from '../../model';
import { LabelledDropdownParameters } from 'src/app/shared/utility';
import { FailedTransactionChart, TopTerminalIssues, TransactionApprovalChart, TransactionByRoutingRule } from '../../constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  dashboardSummaryData: DashboardSummaryData[] = [
    {
      value: 500000,
      image: '../../../../../../assets/icons/dashboard.svg#profit',
      tagline: 'Average Transaction TAT',
      isAmount: true
    },
    {
      value: 48,
      image: '../../../../../../assets/icons/dashboard.svg#money',
      tagline: 'Pending Approvals',
      isAmount: false
    },
    {
      value: 19,
      image: '../../../../../../assets/icons/dashboard.svg#ussd',
      tagline: 'No of USSD Codes',
      isAmount: false
    },
    {
      value: 35,
      image: '../../../../../../assets/icons/dashboard.svg#qr',
      tagline: 'No of NQR',
      isAmount: false
    }
  ]

  filterDropdownParameters: LabelledDropdownParameters = filterParameters;
  
  transactionApprovalChart: Partial<BarChartOptions> = TransactionApprovalChart
  failedTransactionChart: Partial<DonutChartOptions> = FailedTransactionChart

  transactionsByRoutingRule: Partial<DonutChartOptions> = TransactionByRoutingRule
  topTerminalIssues: Partial<BarChartOptions> = TopTerminalIssues

  constructor() { }

  ngOnInit() {
  }

  setDateRange(event) {
    
  }

}
