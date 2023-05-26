import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  ChangeDetectorRef,
} from "@angular/core";
import { DynamicFormComponent } from "src/app/shared/dynamic-form";
import { LookupService } from "src/app/shared/generic-services/lookup.service";
import { AlertService, LoaderComponent } from "src/app/shared/utility";
import { MerchantService } from "../../services/merchant.service";
import { Router } from "@angular/router";
import {
  createMerchantErrors,
  createMerchantForm,
} from "./create-merchant.constants";
import { AppRoutes } from "src/app/core";
import { ButtonState } from "src/app/shared/dynamic-table";
import { Subscription } from "rxjs";
import { Merchant } from "../../model";

@Component({
  selector: "app-create-merchant",
  templateUrl: "./create-merchant.component.html",
  styleUrls: ["./create-merchant.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateMerchantComponent implements OnInit {
  @ViewChild("createMerchantForm", { static: false })
  createMerchantForm: DynamicFormComponent;
  @ViewChild(LoaderComponent, { static: true })
  loader: LoaderComponent;

  form = createMerchantForm;
  errors = createMerchantErrors;
  appRoutes = AppRoutes;
  buttonDisabled: ButtonState = "INVALID";

  subscriptions: Subscription[] = [];

  constructor(
    private readonly alertService: AlertService,
    private readonly cd: ChangeDetectorRef,
    private readonly lookupService: LookupService,
    private readonly merchantService: MerchantService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getMerchantType();
  }
  ngAfterViewChecked() {
    this.subscriptions.push(
      this.createMerchantForm.form.statusChanges.subscribe(
        (status: ButtonState) => {
          this.buttonDisabled = status;
        }
      )
    );
  }
  addMerchant() {
    let form: Merchant = {
      id: 0,
      ...this.createMerchantForm.form.value,
      entityCode: "FBN",
      countryCode: "NG",
    };
    this.loader.start();
    this.merchantService.addMerchant(form).subscribe((response) => {
      this.loader.end();
      this.createMerchantForm.form.reset();
      this.alertService.success(response.status);
      this.router.navigate([this.appRoutes.merchants]);
    });
  }
  getMerchantType() {
    this.subscriptions.push(
      this.lookupService
        .fetchLookupByCode(1, 100, {
          categoryCode: "MERCHANT_TYPE",
          entityCode: "FBN",
        })
        .subscribe((res) => {
          let store = [];
          res.forEach((model) => {
            store.push([model.lookupName, `${model.lookupCode}`]);
          });
          this.form[11].options = new Map(store);
          this.cd.detectChanges();
        })
    );
  }
}
