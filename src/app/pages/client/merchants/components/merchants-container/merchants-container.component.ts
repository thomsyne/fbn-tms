import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRoute } from 'src/app/core';

@Component({
  selector: 'app-merchants-container',
  templateUrl: './merchants-container.component.html',
  styleUrls: ['./merchants-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchantsContainerComponent extends CurrentRoute implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  override ngOnInit() {}

}
