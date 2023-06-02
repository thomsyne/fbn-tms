import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, shareReplay } from "rxjs";
import {
  ApiResponse,
  TableDataResponse,
  TempTableDataResponse,
  UserServiceRoutes,
} from "src/app/core";
import { User, UserProfileRole } from "../model";
import { environment } from "src/environments/environment";
import { BulkUpdateModel } from "src/app/shared/otp-verify/components";

const BASE_URL = environment.BASE_URL;
const USER_SERVICE_URL = UserServiceRoutes;

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchAllUsers(
    offset: number,
    limit: number,
    options?: {
      username: any;
    }
  ): Observable<TempTableDataResponse<User>> {
    let params = new HttpParams();
    if (options.username) params = params.append("name", options.username);

    if (offset) params = params.append("pageNumber", offset);
    if (limit) params = params.append("pageSize", limit);

    return this.httpClient
      .get<TempTableDataResponse<User>>(
        `${BASE_URL}${USER_SERVICE_URL.getAllUsers}`,
        { params }
      )
      .pipe(
        catchError(() => of({ content: {} } as TempTableDataResponse<User>)),
        shareReplay()
      );
  }

  fetchUserProfileRoles(
    offset: number,
    limit: number,
    options?: {
      entityCode: any;
    }
  ): Observable<UserProfileRole[]> {
    let params = new HttpParams();
    if (options.entityCode)
      params = params.append("entityCode", options.entityCode);

    if (offset) params = params.append("pageNumber", offset);
    if (limit) params = params.append("pageSize", limit);

    return this.httpClient.get<UserProfileRole[]>(
      `${BASE_URL}${USER_SERVICE_URL.getUserProfileRoles}`,
      { params }
    );
  }

  createUser(form: Partial<User>) {
    return this.httpClient.post<ApiResponse<any>>(
      `${BASE_URL}${USER_SERVICE_URL.addUser}`,
      form
    );
  }
  getUserById(userId: string): Observable<ApiResponse<User>> {
    return this.httpClient.get<ApiResponse<User>>(
      `${BASE_URL}${USER_SERVICE_URL.getUserById}${userId}`
    );
  }

  fetchUnverifiedUsers(
    offset: number,
    limit: number,
    options?: {
      username: any;
    }
  ): Observable<TempTableDataResponse<User>> {
    let params = new HttpParams();
    if (options.username) params = params.append("name", options.username);

    if (offset) params = params.append("pageNumber", offset);
    if (limit) params = params.append("pageSize", limit);

    return this.httpClient
      .get<TempTableDataResponse<User>>(
        `${BASE_URL}${USER_SERVICE_URL.getUnverifiedUsers}`,
        { params }
      )
      .pipe(
        catchError(() => of({ content: {} } as TempTableDataResponse<User>)),
        shareReplay()
      );
  }

  authorizeUsers(form: BulkUpdateModel[], otp: string){
    return this.httpClient.post<ApiResponse<any>>(`${BASE_URL}${USER_SERVICE_URL.authorizeUsers}?otp=${otp}`, form)
  }
}
