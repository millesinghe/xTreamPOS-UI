import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class ItemBean {
  constructor(
    public itemNo:string,
    public itemName:string,
    public sellPrice:number,
    public cummulativeAmount:number
  ){

  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveItemsById(filteringItem){
    return this.http.get<ItemBean[]>("http://localhost:8080/item-id/"+ filteringItem);
  }
}
