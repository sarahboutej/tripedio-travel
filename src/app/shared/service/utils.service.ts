import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static BASE_API_URL: string;
  public static BASE_STRAPI_API_URL: string;
  constructor(private appConfig: AppConfig) {}
  
  public static setConfig(config: any) {
    UtilsService.BASE_API_URL = config.baseApiUrl;
    UtilsService.BASE_STRAPI_API_URL = config.baseStrapiApiUrl;
  }
}
