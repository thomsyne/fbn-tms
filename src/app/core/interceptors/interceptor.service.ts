import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  AuthServiceRoutes,
  UserServiceRoutes,
  ServiceRequestHeaders,
  MerchantServiceRoutes,
  TerminalServiceRoutes,
  LookupServiceRoutes,
} from "../constants";
import { StorageService } from "../services";

const BASE_URL = environment.BASE_URL;

const AUTH_ROUTES = AuthServiceRoutes;
const USER_ROUTES = UserServiceRoutes;
const MERCHANT_ROUTES = MerchantServiceRoutes;
const TERMINAL_ROUTES = TerminalServiceRoutes;
const LOOKUP_ROUTES = LookupServiceRoutes;

const SERVICE_HEADERS = ServiceRequestHeaders;

@Injectable({
  providedIn: "root",
})
export class InterceptorService {
  constructor(private storageService: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();

    const authEndpoints = [AUTH_ROUTES.login];
    const clientEndpoints = [
      USER_ROUTES.getAllUsers,

      MERCHANT_ROUTES.getAllMerchants,
      MERCHANT_ROUTES.addMerchant,

      TERMINAL_ROUTES.getAllTerminals,
      TERMINAL_ROUTES.addTerminal,
      TERMINAL_ROUTES.getDownloadTerminals,
    ];

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
    }

    let clone = req.clone({
      headers,
    });

    return next.handle(clone);
  }
}
