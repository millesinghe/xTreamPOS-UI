import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class ItemBean {
  constructor(
    public itemNo:string,
    public itemName:string,
    public sellPrice:number,
    public cummulativeAmount:number,
    public qty : number,
    public total : number
  ){

  }
}

export class CartItemBean {
  constructor(

    public itemNo:string,
    public itemName:string,
    public unitPrice:number,
    public qty:number,
    public total : number
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
    return this.http.get<ItemBean[]>("http://192.168.1.120:8080/item-id/"+ filteringItem);
  }
}
