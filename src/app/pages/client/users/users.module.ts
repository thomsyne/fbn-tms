import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormModule } from "src/app/shared/dynamic-form";
import { DynamicTableModule } from "src/app/shared/dynamic-table";
import { ModalModule } from "src/app/shared/modal";
import { SkeletonModule } from "src/app/shared/skeleton";
import { UtilityModule } from "src/app/shared/utility";
import { UsersContainerComponent } from "./components/users-container/users-container.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { RolesListComponent } from "./components/roles-list/roles-list.component";

@NgModule({
    declarations: [
      UsersContainerComponent,
      AllUsersComponent,
      CreateUserComponent,
      RolesListComponent
    ],
    imports: [
      CommonModule,
      UsersRoutingModule,
      DynamicTableModule,
      UtilityModule,
      SkeletonModule,
      DynamicFormModule,
      ModalModule
    ]
  })
  export class UsersModule { }