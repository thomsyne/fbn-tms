import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavigationModule } from 'src/app/shared/navigation';
import { AlertModule, UtilityModule } from 'src/app/shared/utility';
import { DynamicFormModule } from 'src/app/shared/dynamic-form';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavigationModule,
    UtilityModule,
    DynamicFormModule,
    AlertModule
  ]
})
export class LayoutModule { }
