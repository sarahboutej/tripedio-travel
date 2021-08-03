import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  SUPER_PLACE_API = UtilsService.BASE_API_URL + '/api/super-places';
  ACTIVITIES_API = UtilsService.BASE_API_URL + '/api/activities';

  constructor(private http: HttpClient) { }
  

  getFiltredPlaces(superPlaceLabel?: string): Observable<any> {
    let api = `${this.SUPER_PLACE_API}/filtred`;
    if(superPlaceLabel !== undefined) {
      api += `?place_label=${superPlaceLabel}`;
    }
    
    return this.http.get<any>(api);
  }
  
  getFiltredActivities(activityLabel?: string): Observable<any> {
    let api = `${this.ACTIVITIES_API}/filtred`;
    if(activityLabel !== undefined) {
      api += `?activity_label=${activityLabel}`;
    }
    
    return this.http.get<any>(api);
  }
}
