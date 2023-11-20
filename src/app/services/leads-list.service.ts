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

   headers = new HttpHeaders()
  .set('BEARER', 'EmKSlliqBeaGRGpaGFpmR0RSudoGatJWA4ceocQ3hUGPkCG625MRMOMbYh5jpU1zQf40anwxdApRXW9fguljSexGiY')
  .set('USER-ID', 'WGQDW');

   queryParams = new HttpParams();

  private baseUrl = 'https://assignment.leadtracker.cied.dev/v1/leads/';

  constructor(private http: HttpClient) {

  }

  postLogin(body: Object): Observable<Object> {
    return this.http.get(`${this.baseUrl.replace('/leads','/accounts')}login/`, body);
  }


  getUserDetails(){
    return this.http.get(`${this.baseUrl.replace('/leads','/accounts')}user/85NPW/`, { 'headers': this.headers });

  }

  getActiveLeadStatus(){
    return this.http.get(`${this.baseUrl}stage/`, { 'headers': this.headers });

  }

  getProbability(stage_type:CodingParams){
    this.queryParams = this.queryParams.append("stage_type", stage_type.stage_type);
    return this.http.get(`${this.baseUrl}probability/analysis/`, { params: this.queryParams,'headers': this.headers });
  }

  getGraphStage(stage_type:CodingParams){
    this.queryParams = this.queryParams.append("stage_type", stage_type.stage_type);
    return this.http.get(`${this.baseUrl}dashboard/graph/`, { params: this.queryParams,'headers': this.headers });
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
