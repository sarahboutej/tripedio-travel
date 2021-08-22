
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { UtilsService } from './shared/service/utils.service';

export interface Configuration {
    baseApiUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    private readonly CONFIG_PREFIX = "./assets/settings/environment-";
    private readonly CONFIG_SUFFIX = ".json";
    private config: Configuration = {} as Configuration;

    constructor(private http: HttpClient) {
    }

    public getConfig(): Configuration {
        return this.config;
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get<Configuration>(`${this.CONFIG_PREFIX}${environment.stage}${this.CONFIG_SUFFIX}`).pipe(
                catchError((error: any) => {
                    console.error('Error reading configuration file');
                    reject(error);
                    return observableThrowError(error.json().error || 'Server error');
                }))
                .subscribe((responseData: Configuration) => {
                    this.config = responseData;
                    UtilsService.setConfig(responseData.baseApiUrl);
                    resolve(true);
                });
            return observableThrowError('Server error');
        });
    }
}
