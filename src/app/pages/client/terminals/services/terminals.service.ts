import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { ApiResponse, TableDataResponse, TerminalServiceRoutes } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { AllTerminalModel } from '../model';

const BASE_URL = environment.BASE_URL;
const TERMINAL_SERVICE_URL = TerminalServiceRoutes;

@Injectable({
  providedIn: 'root'
})
export class TerminalsService {

constructor(
  private readonly http: HttpClient
) { }

fetchAllTerminals(
  offset: number,
  limit: number,
  options?: {
    terminalId: string;
    terminalModel: string;
    status: string
  }
): Observable<TableDataResponse<AllTerminalModel>> {
  let params = new HttpParams();
  if (options.terminalId) params = params.append("terminalId", options.terminalId);
  if (options.terminalModel) params = params.append("terminalModel", options.terminalModel);
  if (options.status) params = params.append("status", options.status);

  if (offset) params = params.append("pageNumber", offset);
  if (limit) params = params.append("pageSize", limit);

  return this.http
    .get<TableDataResponse<AllTerminalModel>>(
      `${BASE_URL}${TERMINAL_SERVICE_URL.getAllTerminals}`,
      { params }
    )
    .pipe(
      catchError(() => of({ data: {} } as TableDataResponse<AllTerminalModel>)),
      shareReplay()
    );
}

addTerminal(form: Partial<AllTerminalModel>) {
  return this.http.post<ApiResponse<any>>(`${BASE_URL}${TERMINAL_SERVICE_URL.addTerminal}`, form);
}

getTerminalById(terminalId: string): Observable<ApiResponse<AllTerminalModel>> {
  return this.http
    .get<ApiResponse<AllTerminalModel>>(
      `${BASE_URL}${TERMINAL_SERVICE_URL.getTerminalById}/${terminalId}`,
    )
}

getDownloadTerminals(): Observable<ApiResponse<AllTerminalModel[]>> {
  return this.http
    .get<ApiResponse<AllTerminalModel[]>>(
      `${BASE_URL}${TERMINAL_SERVICE_URL.getDownloadTerminals}`,
    )
}

}
