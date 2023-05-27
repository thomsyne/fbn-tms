import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolePermission } from './models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RolePermssionServiceRoutes } from 'src/app/core';

const BASE_URL = environment.BASE_URL;
const ROLE_PERMISSION_URL = RolePermssionServiceRoutes

@Injectable({
  providedIn: 'root'
})
export class RolePermissionService {

  constructor(private readonly httpClient: HttpClient) {}

  getRoles(
    
  ): Observable<RolePermission[]> {
    let params = new HttpParams();

    return this.httpClient
      .get<RolePermission[]>(
        `${BASE_URL}${ROLE_PERMISSION_URL.getRolePermissions}`,
        { params }
      )
  }

}
