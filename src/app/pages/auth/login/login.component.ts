import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { AlertService, LoaderComponent } from 'src/app/shared/utility';
import { loginClientDetailsForm, errors } from './login.constants';
import { Router } from '@angular/router';
import { AppRoutes, LoginDetailsObject, StorageService } from 'src/app/core';
import { AuthService } from 'src/app/core/access-control/auth.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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
  appConstants = AppRoutes

  constructor(
    private readonly alertService: AlertService,
    private readonly authService: AuthService,
    private readonly deviceService: DeviceDetectorService,
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.subscriptions.push(
      this.loginForm.form.statusChanges.subscribe(
        (status: ButtonState) => (this.buttonDisabled = status)
      )
    );
  }

  logIn(){

    this.loader.start();

    let { email, password } = this.loginForm.formValues;

    let payload: LoginDetailsObject = {
      channelType: "WEB",
      entityCode: "FBN",
      username: email,
      password,
      refreshToken: "",
      language: "en",
      deviceId: this.deviceService.getDeviceInfo().os_version,
    }

    this.authService.login(payload).subscribe((response) => {
      this.loader.end();
      if(response.responseCode == '00'){
        
        this.storageService.storeLoggedInUser(response);

        this.alertService.success('Login Successful')
        this.loginForm.form.reset()
        this.router.navigate([this.appConstants.dashboard])


      } else {
        this.alertService.error(response.responseMessage)
      }
    })
  }

  ngOnDestroy(): void {
    
  }

}
