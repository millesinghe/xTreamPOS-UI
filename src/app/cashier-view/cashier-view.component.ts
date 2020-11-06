import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import {CartItemBean, ItemDataService} from "./../service/item-data.service"

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  filterItemCode : string;
  filterItemName: string;
  filterItemPrice : number;
  itemList : [];
  selectedCartItem : CartItemBean;
  filterTotal : number;
  modelQty : string;
  selectedItemModel : string;

  constructor(
    private itemService:ItemDataService 
    ) { }

  ngOnInit(): void {
    this.filterTotal = 0.00
    this.filterItemPrice = 0.00
  }

  addToCart() : void{
    this.resetFilter();
    let item = {} as CartItemBean;

    let itemcode : string = (<HTMLInputElement>document.getElementById("itemcode")).value;
    let itemName : string = (<HTMLInputElement>document.getElementById("ItemName")).textContent;
    let unitPrice : number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty : number = Number((<HTMLInputElement>document.getElementById("qty")).value);
    
    item.itemNo = itemcode
    item.itemName = itemName;
    item.qty = qty;
    item.unitPrice = unitPrice;
    item.total =  unitPrice * qty;
    console.log(item);
    this.selectedCartItem = item;
    console.log("-----END LINE ------");
  }

  resetFilter() : void {
    this.filterTotal = 0.00;
    this.filterItemPrice = 0.00;
    this.filterItemName = "-";
    this.selectedItemModel = ""
    this.itemList = [];
    this.modelQty = ''; 

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

  filterFeedback(item) :void {
    try{
      this.filterItemName = item.itemName;
      this.filterItemPrice = item.sellPrice;
      this.selectedItemModel = item.itemNo;
      let qty : number = Number((<HTMLInputElement>document.getElementById("qty")).value);
      this.filterTotal = this.filterItemPrice * qty
    } catch(e){
      this.filterItemName = "-"
      this.filterItemPrice = 0.00;
    }    
  }

  calcTotalPrice() : void {
    let unitPrice : number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty : number = Number((<HTMLInputElement>document.getElementById("qty")).value);
    this.filterTotal = unitPrice * qty
  }

}
