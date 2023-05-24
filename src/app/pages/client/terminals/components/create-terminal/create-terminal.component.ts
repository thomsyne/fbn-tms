import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form';
import { ButtonState } from 'src/app/shared/dynamic-table';
import { AlertService, LoaderComponent } from 'src/app/shared/utility';
import { createTerminalForm, createTerminalErrors } from './create-terminal.constants';
import { TerminalsService } from '../../services/terminals.service';
import { LookupService } from 'src/app/shared/generic-services/lookup.service';
import { MerchantService } from '../../../merchants/services/merchant.service';
import { AllTerminalModel } from '../..';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/core';

@Component({
  selector: 'app-create-terminal',
  templateUrl: './create-terminal.component.html',
  styleUrls: ['./create-terminal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTerminalComponent implements OnInit, OnDestroy {
  @ViewChild("createTerminalForm", { static: false })
  createTerminalForm: DynamicFormComponent;
  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  form = createTerminalForm;
  errors = createTerminalErrors;
  appRoutes = AppRoutes

  buttonDisabled: ButtonState = "INVALID";

  subscriptions: Subscription[] = [];

  constructor(
    private readonly alertService: AlertService,
    private readonly cd: ChangeDetectorRef,
    private readonly lookupService: LookupService,
    private readonly merchantService: MerchantService,
    private readonly router: Router,
    private readonly terminalService: TerminalsService
  ) { }

  ngOnInit() {

    this.getBrandSupplier()
    this.getTerminalModels()
    this.getPTSP()
    this.getOSVersion()
  }

  ngAfterViewChecked() {
    this.subscriptions.push(
      this.createTerminalForm.form.statusChanges.subscribe(
        (status: ButtonState) => {
          this.buttonDisabled = status;
        }
      )
    );
  }

  getBrandSupplier(){

    this.subscriptions.push(
      this.lookupService.fetchLookupByCode(
        1,
        100,
      {
        categoryCode: 'BRAND_SUPPLIER',
        entityCode: 'FBN'
      }
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
          store.push([model.lookupName, `${model.lookupCode}`]);
        });
        this.form[0].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  getTerminalModels(){
    this.subscriptions.push(
      this.lookupService.fetchLookupByCode(
        1,
        100,
      {
        categoryCode: 'TERMINAL_MODEL',
        entityCode: 'FBN'
      }
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
          store.push([model.lookupName, `${model.lookupCode}`]);
        });
        this.form[1].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  getPTSP(){
    this.subscriptions.push(
      this.lookupService.fetchLookupByCode(
        1,
        100,
      {
        categoryCode: 'PTSP',
        entityCode: 'FBN'
      }
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
          store.push([model.lookupName, `${model.lookupCode}`]);
        });
        this.form[2].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  getOSVersion(){
    this.subscriptions.push(
      this.lookupService.fetchLookupByCode(
        1,
        100,
      {
        categoryCode: 'OS_VERSION',
        entityCode: 'FBN'
      }
      ).subscribe((res) => {
        let store = [];
        res.forEach((model) => {
          store.push([model.lookupName, `${model.lookupCode}`]);
        });
        this.form[3].options = new Map(store);
        this.cd.detectChanges()
      })
    );
  }

  getMerchant(merchantId: string){
    this.loader.start()

    this.merchantService.getMerchantById(merchantId).subscribe((response) => {
      this.loader.end()

      
      this.createTerminalForm.form.patchValue({
        merchantName: response.data.merchantName
      }
      )
      //this.createTerminalForm.form.value['merchantname'] = response.data.merchantName
      console.log(this.createTerminalForm.form.value)
    })
  }

  handleChange(output: any){
    if(output.fieldName == 'merchantId' && output.value.length == 10){
      this.getMerchant(output.value)
    }
  }

  addTerminal(){
    const {
      brand,
      terminalModel,
      ptsp,
      osVersion,
      terminalId,
      serialNo,
      status,
      terminalCondition,
      merchantId,
      merchantName,
      currentLocation
    } = this.createTerminalForm.form.value;

    let form: AllTerminalModel = {
      id: 0,
      entityCode: 'FBN',
      brand,
      terminalModel,
      ptsp,
      osVersion,
      terminalId,
      serialNo,
      status,
      terminalCondition,
      merchantId,
      merchantName,
      currentLocation
    }

    this.loader.start()

    this.terminalService.addTerminal(form).subscribe((response) => {
      this.loader.end()
      
      this.createTerminalForm.form.reset()
      this.alertService.success(response.status)
      this.router.navigate([this.appRoutes.terminals])
    })
  }

  ngOnDestroy(): void {
    
  }

}
