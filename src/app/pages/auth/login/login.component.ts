import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { LoaderComponent } from 'src/app/shared/utility';
import { loginClientDetailsForm, errors } from './login.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewChecked, OnDestroy {
  @ViewChild(LoaderComponent, { static: true }) loader: LoaderComponent;
  @ViewChild("loginForm", { static: false }) loginForm: DynamicFormComponent;

  buttonDisabled: ButtonState = "INVALID";
  permissions: string[];
  loginDetailsForm = loginClientDetailsForm;
  errors = errors;

  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    
  }

  logIn(){
    
  }

  ngOnDestroy(): void {
    
  }

}
