import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static BASE_API_URL: string;
  constructor(private appConfig: AppConfig) {}
  
  public static setConfig(baseApi: string) {
    UtilsService.BASE_API_URL = baseApi;
  }
}
