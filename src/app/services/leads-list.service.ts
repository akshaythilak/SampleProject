import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CodingParams {

  stage_type: string,
  limit: number,
  offset: number,
  search: string,
  ordering: any
}
@Injectable({
  providedIn: 'root'
})
export class LeadsListService {



  private baseUrl = 'https://assignment.leadtracker.cied.dev/v1/leads/';

  constructor(private http: HttpClient) {

  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLeadsList(obj: CodingParams): Observable<any> {
    const headers = new HttpHeaders()
      .set('BEARER', 'EmKSlliqBeaGRGpaGFpmR0RSudoGatJWA4ceocQ3hUGPkCG625MRMOMbYh5jpU1zQf40anwxdApRXW9fguljSexGiY')
      .set('USER-ID', 'WGQDW');
    let queryParams = new HttpParams();
    // obj = {stage_type:'active',limit:10,offset:0};
    queryParams = queryParams.append("stage_type", obj.stage_type);
    queryParams = queryParams.append("limit", obj.limit);
    queryParams = queryParams.append("offset", obj.offset);
    queryParams = queryParams.append("search", obj.search);
    queryParams = queryParams.append("ordering", obj.ordering);
    return this.http.get(`${this.baseUrl}`, { params: queryParams,'headers': headers });
  }
}
