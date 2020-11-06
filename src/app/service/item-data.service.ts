import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ItemBean } from '../model/cashierBean';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveItemsById(filteringItem){
    return this.http.get<ItemBean[]>("http://192.168.1.120:8080/item-id/"+ filteringItem);
  }
}
