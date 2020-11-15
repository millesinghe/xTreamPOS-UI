import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './AppConfig';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  static properties: AppConfig;
 
    constructor(private http: HttpClient) {}
 
    load() {
 
        const jsonFile = `assets/config.json`;
        
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : AppConfig) => {
               AppConfigService.properties = <AppConfig>response;
 
               console.log('Config Loaded');
               resolve();
               
            }).catch((response: any) => {
               reject(`Could not load the config file`);
            });
        });
    }
}
