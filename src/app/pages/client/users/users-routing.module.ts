import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersContainerComponent } from "./components/users-container/users-container.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";

const routes: Routes = [
    {
      path: "",
      component: UsersContainerComponent,
      children: [
        {
          path: "",
          component: AllUsersComponent,
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