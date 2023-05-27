import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  adminNavConfig,
  adminNavConfigMinor,
  clientNavConfig,
  clientNavConfigMinor,
} from "./layout.constants";
import { Router } from "@angular/router";
import { UserDetails, StorageService, LoggedInUserObject } from "src/app/core";
import { AuthService } from "src/app/core/access-control/auth.service";
import { SideNavigation } from "src/app/shared/navigation";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {

  isNavOpen: boolean;
  user: LoggedInUserObject;
  permissions!: string[];


  navConfig: SideNavigation[] = this.storageService.isAdmin()
    ? adminNavConfig
    : clientNavConfig;

  navConfigMinor: SideNavigation[] = this.storageService.isAdmin()
    ? adminNavConfigMinor
    : clientNavConfigMinor;

  links: string[] = this.storageService.isAdmin()
    ? ["Logout"]
    : ["My Profile", "Logout"];
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  dropDownClick(linkName: any) {
    if (linkName === "My Profile")
      this.router.navigate(["./profile/basic-info"]);
    if (linkName === "Logout") this.authService.logout();
  }

  ngOnInit() {
    this.storageService.userData$.subscribe((user) => {
      this.user = user;
      this.permissions = user?.userPermissionList.map((x) => x.code);
    });
  }
}
