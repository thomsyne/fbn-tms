import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, shareReplay } from "rxjs";
import { TableDataResponse, UserServiceRoutes } from "src/app/core";
import { User } from "../model";
import { environment } from "src/environments/environment";

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
  ): Observable<TableDataResponse<User>> {
    let params = new HttpParams();
    if (options.username) params = params.append("name", options.username);

    if (offset) params = params.append("pageIndex", offset);
    if (limit) params = params.append("pageSize", limit);

    return this.httpClient
      .get<TableDataResponse<User>>(
        `${BASE_URL}${USER_SERVICE_URL.getAllUsers}`,
        { params }
      )
      .pipe(
        catchError(() => of({ data: [] } as TableDataResponse<User>)),
        shareReplay()
      );
  }
}
