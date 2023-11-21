import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface listParams {
  stage_type: string,
  limit: number,
  offset: number,
  search: string,
  ordering: any
}

const token = localStorage.getItem("token") || ''
const userId = localStorage.getItem("userId") || ''

@Injectable({
  providedIn: 'root'
})

export class LeadsListService {

  headers = new HttpHeaders()
    .set('BEARER', token)
    .set('USER-ID', userId);

  queryParams = new HttpParams();

  private baseUrl = 'https://assignment.leadtracker.cied.dev/v1/';

  constructor(private http: HttpClient) {

  }

  userLogin(body: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}accounts/login/`, body);
  }


  getUserDetails(userId: string) {
    return this.http.get(`${this.baseUrl}user/${userId}`, { 'headers': this.headers });
  }

  getActiveLeadStatus() {
    return this.http.get(`${this.baseUrl}leads/stage/`, { 'headers': this.headers });
  }

  getProbability(stage_type: listParams) {
    this.queryParams = this.queryParams.append("stage_type", stage_type.stage_type);
    return this.http.get(`${this.baseUrl}leads/probability/analysis/`, { params: this.queryParams, 'headers': this.headers });
  }

  getGraphStage(stage_type: listParams) {
    this.queryParams = this.queryParams.append("stage_type", stage_type.stage_type);
    return this.http.get(`${this.baseUrl}leads/dashboard/graph/`, { params: this.queryParams, 'headers': this.headers });
  }

  getLeadsList(obj: listParams): Observable<any> {
    let queryParams = new HttpParams();
    // obj = {stage_type:'active',limit:10,offset:0};
    queryParams = queryParams.append("stage_type", obj.stage_type);
    queryParams = queryParams.append("limit", obj.limit);
    queryParams = queryParams.append("offset", obj.offset);
    queryParams = queryParams.append("search", obj.search);
    queryParams = queryParams.append("ordering", obj.ordering);
    return this.http.get(`${this.baseUrl}leads/`, { params: queryParams, 'headers': this.headers });
  }
}
