import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthServiceRoutes, UserServiceRoutes, ServiceRequestHeaders, MerchantServiceRoutes, TerminalServiceRoutes, LookupServiceRoutes, RolePermssionServiceRoutes, AuthRoutes } from "../constants";
import { StorageService } from "../services";
import jwt_decode from "jwt-decode";
import { JWTToken } from "../model";
import { AlertService } from "src/app/shared/utility";
import { AuthService } from "../access-control/auth.service";

const BASE_URL = environment.BASE_URL;
const AUTH_APP_ROUTE = AuthRoutes

const AUTH_ROUTES = AuthServiceRoutes;
const USER_ROUTES = UserServiceRoutes;
const MERCHANT_ROUTES = MerchantServiceRoutes;
const TERMINAL_ROUTES = TerminalServiceRoutes;
const LOOKUP_ROUTES = LookupServiceRoutes;

const SERVICE_HEADERS = ServiceRequestHeaders;

const ROLE_PERMISSION_URL = RolePermssionServiceRoutes

@Injectable({
  providedIn: "root",
})
export class InterceptorService {
  constructor(
    private readonly alertService: AlertService,
    private readonly authService: AuthService,
    private storageService: StorageService
    ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();

    const authEndpoints = [AUTH_ROUTES.login];
    const clientEndpoints = [
      USER_ROUTES.getAllUsers,
      USER_ROUTES.getUserProfileRoles,
      USER_ROUTES.addUser,

      MERCHANT_ROUTES.getAllMerchants,
      MERCHANT_ROUTES.addMerchant,

      TERMINAL_ROUTES.getAllTerminals,
      TERMINAL_ROUTES.addTerminal,
      TERMINAL_ROUTES.getDownloadTerminals,

      ROLE_PERMISSION_URL.getRolePermissions
    ]

    const endpointsWithURLParams = [
      MERCHANT_ROUTES.getMerchantById,
      LOOKUP_ROUTES.getAllByCategory,
      TERMINAL_ROUTES.getTerminalById,
    ];

    if (authEndpoints.includes(req.url.slice(BASE_URL.length))) {
      //const jwtToken = this.storageService.getLoggedInUser().ticketID;
      headers = new HttpHeaders({
        //Authorization: "Bearer " + jwtToken
        ...SERVICE_HEADERS,
      });
    }

    if (clientEndpoints.includes(req.url.slice(BASE_URL.length))) {
      const jwtToken = this.storageService.getLoggedInUser()?.ticketID;
      headers = new HttpHeaders({
        Authorization: "Bearer " + jwtToken,
        ...SERVICE_HEADERS,
      });
      this.checkToken()
    }

    if (
      endpointsWithURLParams.includes(
        req.url.slice(BASE_URL.length).split("/")[0] +
          "/" +
          req.url.slice(BASE_URL.length).split("/")[1]
      )
    ) {
      const jwtToken = this.storageService.getLoggedInUser()?.ticketID;

      headers = new HttpHeaders({
        Authorization: "Bearer " + jwtToken,
        ...SERVICE_HEADERS,
      });
      this.checkToken()
    }

    let clone = req.clone({
      headers,
    });

    return next.handle(clone);
  }

  checkToken(){
    var decoded: JWTToken = jwt_decode(this.storageService.getLoggedInUser()?.ticketID);
    console.log(decoded);

    // Get the current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);

    if (decoded.exp < currentTime) {
      this.alertService.error('Session expired! Please login again!', {keepAfterRouteChange: true})
      this.authService.logout()
    }
  }
}
