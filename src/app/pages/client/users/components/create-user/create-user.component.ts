import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { createUserModalData, createUserFormFields, errors } from './create-user.constants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;

  @Output() closeModal = new EventEmitter();
  @Output() refreshData = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();

  title: string = '';
  isAdmin: boolean;
  hasFinishedLoading = false;


  modalData = createUserModalData;
  createStaffForm = createUserFormFields;
  errors = errors;
  buttonDisabled: ButtonState;
  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  createUser(){
    
  }

}
