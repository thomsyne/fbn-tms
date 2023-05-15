import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-all-merchants',
  templateUrl: './all-merchants.component.html',
  styleUrls: ['./all-merchants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllMerchantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
