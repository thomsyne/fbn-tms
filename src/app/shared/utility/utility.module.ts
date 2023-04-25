import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InitialsPipe } from "src/app/core/pipes/initials.pipe";
import { CapitalizePipe } from "./capitalize.pipe";
import { CustomCurrencyPipe } from "./custom-currency.pipe";
import { DescribeResponsePipe } from "./describe-response.pipe";
import { FormatNumberPipe } from "./format-number.pipe";
import { LabelledDropdownComponent } from "./labelled-dropdown/labelled-dropdown.component";
import { LoaderComponent } from "./loader/loader.component";
import { SanitizeOperationTypePipe } from "./sanitize-operation-type.pipe";
import { PermissionsDirective } from "src/app/core/directives/permissions.directive";

@NgModule({
    declarations: [
       SanitizeOperationTypePipe,
       DescribeResponsePipe,
       LoaderComponent,
       LabelledDropdownComponent,
       CapitalizePipe,
       FormatNumberPipe,
       InitialsPipe,
       PermissionsDirective
      // CustomCurrencyPipe
     ],
    imports: [CommonModule],
    exports: [
       SanitizeOperationTypePipe,
       DescribeResponsePipe,
       LoaderComponent,
       LabelledDropdownComponent,
       CapitalizePipe,
       FormatNumberPipe,
       InitialsPipe,
       PermissionsDirective
      // CustomCurrencyPipe
    ],
  })
  export class UtilityModule {}