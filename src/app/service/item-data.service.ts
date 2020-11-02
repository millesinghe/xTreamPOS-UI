import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveItemsById(){
    console.log("Request Sends")
    return this.http.get("http://localhost:8080/item-id/101");;
  }
}
