import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersContainerComponent } from "./components/users-container/users-container.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";
import { RolesListComponent } from "./components/roles-list/roles-list.component";
import { UnverifiedUsersComponent } from "./components/unverified-users/unverified-users.component";

const routes: Routes = [
    {
      path: "",
      component: UsersContainerComponent,
      children: [
        {
          path: "",
          component: AllUsersComponent,
        },
        {
          path: "roles",
          component: RolesListComponent,
        },
        {
          path: "unverified",
          component: UnverifiedUsersComponent,
        },
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
  })
  export class UsersRoutingModule {}