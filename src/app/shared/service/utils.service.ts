import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static BASE_API_URL = environment.baseApiUrl;
  constructor() { }
}
