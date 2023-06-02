import { Component, OnInit, ChangeDetectionStrategy, ViewChild, EventEmitter, Output, ChangeDetectorRef, AfterViewInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { AlertService, LoaderComponent } from 'src/app/shared/utility';
import { errors, verifyOTPFormFields, verifyOTPModalData } from './verify-modal.constants';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { User } from 'src/app/pages/client/users/model';
import { OTPModel } from '..';

@Component({
  selector: 'app-verify-modal',
  templateUrl: './verify-modal.component.html',
  styleUrls: ['./verify-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyModalComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent, { static: false })
  verifyForm: DynamicFormComponent;
  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  @Input() checkedItems: User[]
  @Input() bulkAction: string
  @Output() closeModal = new EventEmitter();
  @Output() refreshData = new EventEmitter<OTPModel>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  title: string = '';
  hasFinishedLoading = false;


  modalData = verifyOTPModalData;
  form = verifyOTPFormFields;
  errors = errors;
  buttonDisabled: ButtonState;
  subscriptions: Subscription[] = [];

  constructor(
    private readonly cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.verifyForm.form.statusChanges.subscribe(
        (status: ButtonState) => {
          this.buttonDisabled = status;
        }
      )
    );
    console.log(this.checkedItems)
    this.cd.detectChanges()
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes)
  }

  sendVerify(){
    let { otp, comment } = this.verifyForm.form.value
    this.refreshData.emit({otp, comment})
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

}
