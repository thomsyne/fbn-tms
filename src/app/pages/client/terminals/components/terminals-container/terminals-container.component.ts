import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRoute } from 'src/app/core';

@Component({
  selector: 'app-terminals-container',
  templateUrl: './terminals-container.component.html',
  styleUrls: ['./terminals-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalsContainerComponent extends CurrentRoute implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  override ngOnInit() {
  }

}
