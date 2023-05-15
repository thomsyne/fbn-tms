import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRoute } from 'src/app/core';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent extends CurrentRoute implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  override ngOnInit() {
  }

}
