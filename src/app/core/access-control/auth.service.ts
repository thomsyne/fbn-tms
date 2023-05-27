import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRoutes, AuthServiceRoutes } from '../constants';
import { LoggedInUserObject, LoginDetailsObject } from '../model';
import { Router } from '@angular/router';

const BASE_URL = environment.BASE_URL;
const AUTH_SERVICE_URL = AuthServiceRoutes;
const AUTH_APP_ROUTE = AuthRoutes

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private readonly router: Router,
  private httpClient: HttpClient
) { }

login(payload: LoginDetailsObject): Observable<LoggedInUserObject> {
  return this.httpClient.post<LoggedInUserObject>(
    `${BASE_URL}${AUTH_SERVICE_URL.login}`,
    payload
  );
}

logout(){
  localStorage.clear()
  this.router.navigate([AUTH_APP_ROUTE.login])
}

}
