import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reports-types',
  templateUrl: './reports-types.component.html',
  styleUrls: ['./reports-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsTypesComponent implements OnInit {

  controllers = [
    {
      title: "Merchant Report",
      permission: 'MANAGE_SYSTEM_CONFIGURATION',
      text: "Monitor update merchant onboarding reports.",
      route: "/reports/merchants",
      img: "https://assetslogos.s3.eu-west-1.amazonaws.com/frontendassets/icons/icon__blue__bank.svg"
    },
    {
      title: "Transaction Reports",
      permission: 'MANAGE_SYSTEM_CONFIGURATION',
      text: "Keep track of all network transactions.",
      route: "/reports/settlements",
      img: "https://assetslogos.s3.eu-west-1.amazonaws.com/frontendassets/icons/icon__blue__file.svg"
    },
    {
      title: "Settlement Report",
      permission: 'MANAGE_SYSTEM_CONFIGURATION',
      text: "Generate report on transaction settlements.",
      route: "/reports/billings",
      img: "https://assetslogos.s3.eu-west-1.amazonaws.com/frontendassets/icons/icon__blue__pos__terminal.svg"
    },
    {
      title: "Terminal Report",
      permission: 'MANAGE_SYSTEM_CONFIGURATION',
      text: "Monitor update  and changes on terminals.",
      route: "/reports/cashiers",
      img: "https://assetslogos.s3.eu-west-1.amazonaws.com/frontendassets/icons/icon__blue__pos__terminal.svg"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
