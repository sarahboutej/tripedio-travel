import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Subscription } from '../../model/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  AGENTS_API = UtilsService.BASE_API_URL + '/api/agents';
  SUPER_PLACE_API = UtilsService.BASE_API_URL + '/api/super-places';
  ACTIVITIES_API = UtilsService.BASE_API_URL + '/api/activities';
  AGENCIES_API = UtilsService.BASE_API_URL + '/api/agencies';

  API_SUBSCRIPTION=UtilsService.BASE_API_URL+'/api/subscriptions';
  AGENT_PLACE_API = UtilsService.BASE_API_URL + '/api/specialities';
  AGENT_ACTIVITY_API = UtilsService.BASE_API_URL + '/api/agent-activities';

  AGENT_GALLERY_API = UtilsService.BASE_API_URL + '/api/galleries';


  constructor(private http: HttpClient) { }
  
  getFiltredPlaces(superPlaceLabel?: string, offset?: number, page?: number): Observable<any> {
    let api = `${this.SUPER_PLACE_API}/filtred`;
    
    let params = new HttpParams();
    if(superPlaceLabel) {
      params=params.set('place_label', superPlaceLabel);
    }
    if(offset !== undefined && offset !== -1) {
      params=params.set('offset', '' + offset);
    }
    if(page !== undefined && page !== -1) {
      params=params.set('page', '' + page);
    }

    return this.http.get<any>(api, {params: params});
  }
  
  getFiltredActivities(activityLabel?: string, offset?: number, page?: number): Observable<any> {
    let api = `${this.ACTIVITIES_API}/filtred`;

    let params = new HttpParams();
    if(activityLabel) {
      params=params.set('activity_label', activityLabel);
    }
    if(offset !== undefined && offset !== -1) {
      params=params.set('offset', '' + offset);
    }
    if(page !== undefined && page !== -1) {
      params=params.set('page', '' + page);
    }
    
    return this.http.get<any>(api, {params: params});
  }
  getFiltredAgency(agencyUid?: string, offset?: number, page?: number): Observable<any> {
    let api = `${this.AGENCIES_API}/filtred`;

    let params = new HttpParams();
    if(agencyUid) {
      params=params.set('agency', agencyUid);
      //console.log(agencyUid)
    }
    if(offset !== undefined && offset !== -1) {
      params=params.set('offset', '' + offset);
    }
    if(page !== undefined && page !== -1) {
      params=params.set('page', '' + page);
    }
    
    return this.http.get<any>(api, {params: params});
  }

  getFiltredAgents(filterMap: any): Observable<any> {
    let api = `${this.AGENTS_API}/filtred`;

    let params = new HttpParams();
    params=params.set('page', filterMap.page);
    params=params.set('offset', filterMap.offset);
    if(filterMap.activity) {
      params=params.set('activity', filterMap.activity);
    }
    if(filterMap.place) {
      params=params.set('place', filterMap.place);
    }
    if(filterMap.agency) {
      params=params.set('agency', filterMap.agency);
    }
    if(filterMap.noConsultancyFee) {
      params=params.set('noConsultancyFee', filterMap.noConsultancyFee);
    }
    
    return this.http.get<any>(api, {params: params});
  }

  saveSubscritpion(subscription:Subscription): Observable<any>
  {
    return this.http.post(this.API_SUBSCRIPTION,subscription);
  }

  getAgentByUuid(uuid: string ): Observable<any> {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    if(token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any>(`${this.AGENTS_API}/profile/${uuid}`, {headers: headers});
  }

  getAgentActivities(uuid: string ): Observable<any> {
    return this.http.get<any>(`${this.AGENT_ACTIVITY_API}/${uuid}`);
  }
 
  getAgentPlaces(uuid: string ): Observable<any> {
    return this.http.get<any>(`${this.AGENT_PLACE_API}/${uuid}`);
  }

  getAgentGalleries(uuid: string ): Observable<any> {
    return this.http.get<any>(`${this.AGENT_GALLERY_API}/${uuid}`);
  }

  getPlaces(): Observable<any> {
    return this.http.get<any>(`${this.SUPER_PLACE_API}`);
  }
}
