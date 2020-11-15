import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ItemBean } from '../model/cashierBean';
import { AppConfigService } from 'src/config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  protected appConfig = AppConfigService.properties;
  
  constructor(
    private http:HttpClient
  ) { }

  retrieveItemsById(filteringItem){
    let host = this.appConfig.database.hostname;
    let port = this.appConfig.database.port;
    let getByItemId =  this.appConfig.apiServer.getByItemId;

    return this.http.get<ItemBean[]>("http://"+ host + ":"+ port + getByItemId + filteringItem);
  }
}
