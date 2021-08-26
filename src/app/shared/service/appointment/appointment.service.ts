import { Injectable } from '@angular/core';
import {UtilsService} from "../utils.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  APPOINTEMENT_API = UtilsService.BASE_API_URL + '/api/appointments';
  AVAILIBILITY_API = UtilsService.BASE_API_URL + '/api/availabilities';

  constructor(private http: HttpClient) { }

  
  createAppointment(payload: any): Observable<any> {
    return this.http.post<any>(`${this.APPOINTEMENT_API}`, payload);
  }

  getAvalibilityByDay(agentUuid:any,date:any): Observable<any> {
    return this.http.get<any>(`${this.AVAILIBILITY_API}/${agentUuid}/${date}`);
  }
}
