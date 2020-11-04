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
  itemList : [];
  filterTotal : number;

  constructor(
    private itemService:ItemDataService 
    ) { }

  ngOnInit(): void {
    this.filterTotal = 0.00
  }

  addToCart(){
    console.log("Click Add btn")
    
    
    console.log("-----END LINE ------");
  }

  onKeypressEvent(event: any) : void{
    let value = event.target.value;
    if(value.length>0){
      this.itemService.retrieveItemsById(value).subscribe(
        response => this.handleItemCodeSearch(response)
      );
    } else {
      //clear all
      this.itemList = []
    }
 }

  handleItemCodeSearch(response) : void{  
    this.itemList = response;
  }

  filterFeedback(response) :void {
    try{
      this.filterItemName = response.itemName;
      this.filterItemPrice = response.sellPrice;
      this.selectedItem = response.itemNo;
    } catch(e){
      this.filterItemName = "-"
      this.filterItemPrice = 0.00;
    }    
  }

  calcTotalPrice() : void {
    
    let unitPrice : number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty : number = Number((<HTMLInputElement>document.getElementById("qty")).value);
    this.filterTotal = unitPrice * qty
    //var totalPrice = unitPrice * qty;
  }

}
