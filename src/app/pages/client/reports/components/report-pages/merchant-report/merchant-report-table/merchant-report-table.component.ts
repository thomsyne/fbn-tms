import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-merchant-report-table',
  templateUrl: './merchant-report-table.component.html',
  styleUrls: ['./merchant-report-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchantReportTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
