import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StorageService } from "../services";
import { AuthRoutes } from "../constants";

@Injectable({
    providedIn: "root",
  })
  export class ViewDashboardGuard implements CanActivate {
    authRoutes = AuthRoutes

    constructor(
      private router: Router,
      private storage: StorageService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const permissions: any[] = this.storage.getPermissons();
        
        if (permissions.includes("MANAGE_SYSTEM_CONFIGURATION")) {
            return true;
          } else {
            this.router.navigate([this.authRoutes.login]);
          }
          return false
    }

}