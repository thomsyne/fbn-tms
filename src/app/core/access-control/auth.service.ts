import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthServiceRoutes } from '../constants';
import { LoggedInUserObject, LoginDetailsObject } from '../model';

const BASE_URL = environment.BASE_URL;
const AUTH_SERVICE_URL = AuthServiceRoutes;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private httpClient: HttpClient
) { }

login(payload: LoginDetailsObject): Observable<LoggedInUserObject> {
  return this.httpClient.post<LoggedInUserObject>(
    `${BASE_URL}${AUTH_SERVICE_URL.login}`,
    payload
  );
}

logout(){
  
}

}
