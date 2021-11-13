import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  ARTICLES_DESTINATION_API = UtilsService.BASE_STRAPI_API_URL + '/articles';
  API_NEWSLETTER = UtilsService.BASE_STRAPI_API_URL + '/newsletters';

  headers_strapi: any = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  constructor(private http: HttpClient) { }

  getArticlesForDestination(destinationUuid: string): Observable<any> {
    return this.http.get<any>(`${this.ARTICLES_DESTINATION_API}/${destinationUuid}`);
  }

  newsLetterForDestination(data: any): Observable<any> {
    const httpHeaders = new HttpHeaders(this.headers_strapi);
    return this.http.post<any>(this.API_NEWSLETTER, data, { headers: httpHeaders });
  }

}
