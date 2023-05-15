import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthServiceRoutes, ServiceRequestHeaders } from "../constants";
import { StorageService } from "../services";

const BASE_URL = environment.BASE_URL;
const AUTH_ROUTES = AuthServiceRoutes;
const SERVICE_HEADERS = ServiceRequestHeaders

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

    if (authEndpoints.includes(req.url.slice(BASE_URL.length))) {
      //const jwtToken = this.storageService.getLoggedInUser().ticketID;
      headers = new HttpHeaders({
        //Authorization: "Bearer " + jwtToken
        ...SERVICE_HEADERS
      });
    }

    let clone = req.clone({
      headers,
    });

    return next.handle(clone);
  }
}
