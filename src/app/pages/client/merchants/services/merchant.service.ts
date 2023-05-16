import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { MerchantServiceRoutes, TableDataResponse } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { Merchant } from '../model';

const BASE_URL = environment.BASE_URL;
const MERCHANT_SERVICE_URL = MerchantServiceRoutes;

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

constructor(private readonly httpClient: HttpClient) { }

fetchMerchants(
  offset: number,
  limit: number,
  options?: {
    username: any;
  }
): Observable<TableDataResponse<Merchant>> {
  let params = new HttpParams();
  params = params.append("entityCode", "FBN")
  if (options.username) params = params.append("name", options.username);

  if (offset) params = params.append("pageNumber", offset);
  if (limit) params = params.append("pageSize", limit);

  return this.httpClient
    .get<TableDataResponse<Merchant>>(
      `${BASE_URL}${MERCHANT_SERVICE_URL.getAllMerchants}`,
      { params }
    )
    .pipe(
      catchError(() => of({ content: [] } as TableDataResponse<Merchant>)),
      shareReplay()
    );
}

}