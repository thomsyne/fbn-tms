import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, EventEmitter, OnDestroy, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { createUserModalData, createUserFormFields, errors } from './create-user.constants';
import { AlertService, LoaderComponent } from 'src/app/shared/utility';
import { LookupService } from 'src/app/shared/generic-services/lookup.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model';
import { PasswordGenerator } from 'src/app/core/helpers/password-generator';
import { RolePermissionService } from 'src/app/shared/generic-services/role-permission.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent, { static: false })
  createUserForm: DynamicFormComponent;
  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  @Output() closeModal = new EventEmitter();
  @Output() refreshData = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();

  title: string = '';
  isAdmin: boolean;
  hasFinishedLoading = false;


  modalData = createUserModalData;
  form = createUserFormFields;
  errors = errors;
  buttonDisabled: ButtonState;
  subscriptions: Subscription[] = [];

  constructor(
    private readonly alertService: AlertService,
    private readonly cd: ChangeDetectorRef,
    private readonly lookupService: LookupService,
    private readonly passwordGenerator: PasswordGenerator,
    private readonly rolePermissionService: RolePermissionService,
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.getUserRoles()
    this.getBranchCode()
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.createUserForm.form.statusChanges.subscribe(
        (status: ButtonState) => {
          this.buttonDisabled = status;
        }
      )
    );
  }

  // getUserRole(){

  //   this.subscriptions.push(
  //     this.userService.fetchUserProfileRoles(
  //       1,
  //       100,
  //     {
  //       entityCode: 'FBN'
  //     }
  //     ).subscribe((res) => {
  //       let store = [];
  //       res.forEach((model) => {
  //         if (model.status == 'Active'){
  //           store.push([model.entityCode, `${model.entityCode}`]);
  //         }
  //       });
  //       this.form[5].options = new Map(store);
  //       this.cd.detectChanges()
  //     })
  //   );
  // }

  getUserRoles(){

    this.subscriptions.push(
      this.rolePermissionService.getRoles(
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
        store.push([model.roleName, `${model.roleCode}`]);
        });
        this.form[5].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  getBranchCode(){

    this.subscriptions.push(
      this.lookupService.fetchLookupByCode(
        1,
        100,
      {
        categoryCode: 'BRANCH_CODE',
        entityCode: 'FBN'
      }
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
          store.push([model.lookupName, `${model.lookupCode}`]);
        });
        this.form[6].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  createUser(){
    this.loader.start()
    const {
      firstname,
      middlename,
      lastname,
      mobileNo,
      email,
      userRole,
      branchCode
    } = this.createUserForm.form.value

    if (
      !firstname ||
      !lastname ||
      !mobileNo ||
      !email ||
      !userRole ||
      !branchCode
    ){
      this.alertService.warn('Please enter all required information.')
      return
    }

    let form: Partial<User> = {
      id: 0,
      firstname,
      middlename: middlename || '',
      lastname,
      username: email,
      password: this.passwordGenerator.generatePassword(),
      entityCode: 'FBN',
      email,
      mobileNo,
      userRole,
      status: 'Active',
      branchCode,
      fullname: firstname + ' ' + lastname,
      language: 'en',
      country: 'Nigeria'
    }
    this.loader.end()
    console.log(form)

    this.userService.createUser(form).subscribe((response) => {
      this.loader.end()
      if (response.code == 'EE1'){
        this.alertService.error(response.desc)
        return
      }

      this.createUserForm.form.reset()
      this.alertService.success(response.status)
      this.refreshData.emit()
      this.closeModal.emit()
    })

  }

  ngOnDestroy(): void {
    
  }

}
