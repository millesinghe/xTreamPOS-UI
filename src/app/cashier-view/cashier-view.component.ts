import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import {ItemDataService} from "./../service/item-data.service"

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  selectedItem : string;
  filterItemName: string;
  filterItemPrice : number;
  itemList : []

  constructor(
    private itemService:ItemDataService 
    ) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log("Click Add btn")
    
    
    console.log("-----END LINE ------");
  }

  onKeypressEvent(event: any){
    let value = event.target.value;
    if(value.length>0){
      this.itemService.retrieveItemsById(value).subscribe(
        response => this.handleResponse(response)
      );
    }
 }

  handleResponse(response){
    console.log(">>>" +response);
    this.itemList = response;

    try{
      this.filterItemName = response[0].itemName;
      this.filterItemPrice = response[0].sellPrice;
    } catch(e){
      this.filterItemName = "-"
      this.filterItemPrice = 0.00;
    }    
  }
}
