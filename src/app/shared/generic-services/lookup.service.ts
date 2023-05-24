import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { LookupServiceRoutes } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { LookupDataObject } from './models/model';

const BASE_URL = environment.BASE_URL;
const LOOKUP_SERVICE_URL = LookupServiceRoutes;

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private readonly httpClient: HttpClient) {}

  fetchLookupByCode(
    offset: number,
    limit: number,
    options?: {
      categoryCode: string;
      entityCode: string
    }
  ): Observable<LookupDataObject[]> {
    let params = new HttpParams();

    if (options.entityCode) params = params.append("entityCode", options.entityCode);
    
    if (offset) params = params.append("pageNumber", offset);
    if (limit) params = params.append("pageSize", limit);

    return this.httpClient
      .get<LookupDataObject[]>(
        `${BASE_URL}${LOOKUP_SERVICE_URL.getAllByCategory}/${options.categoryCode}`,
        { params }
      )
  }

}
