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
  API_SUBSCRIPTION=UtilsService.BASE_API_URL+'/api/subscriptions';
  AGENT_PLACE_API = UtilsService.BASE_API_URL + '/api/specialities';
  AGENT_ACTIVITY_API = UtilsService.BASE_API_URL + '/api/agent-activities';

  constructor(private http: HttpClient) { }
  
  getFiltredPlaces(superPlaceLabel?: string, offset?: number): Observable<any> {
    let api = `${this.SUPER_PLACE_API}/filtred`;
    
    let params = new HttpParams();
    if(superPlaceLabel) {
      params=params.set('place_label', superPlaceLabel);
    }
    if(offset !== undefined && offset !== -1) {
      params=params.set('offset', '' + offset);
    }

    return this.http.get<any>(api, {params: params});
  }
  
  getFiltredActivities(activityLabel?: string, offset?: number): Observable<any> {
    let api = `${this.ACTIVITIES_API}/filtred`;

    let params = new HttpParams();
    if(activityLabel) {
      params=params.set('activity_label', activityLabel);
    }
    if(offset !== undefined && offset !== -1) {
      params=params.set('offset', '' + offset);
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
    return this.http.get<any>(`${this.AGENTS_API}/${uuid}`);
  }

  getAgentActivities(uuid: string ): Observable<any> {
    return this.http.get<any>(`${this.AGENT_ACTIVITY_API}/${uuid}`);
  }

  getAgentPlaces(uuid: string ): Observable<any> {
    return this.http.get<any>(`${this.AGENT_PLACE_API}/${uuid}`);
  }
}
