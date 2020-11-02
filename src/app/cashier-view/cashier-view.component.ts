import { Component, OnInit } from '@angular/core';
import {ItemDataService} from "./../service/item-data.service"

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  constructor(
    private itemService:ItemDataService 
    ) { }

  ngOnInit(): void {
  }

  getfilterItemsbyId(){
    console.log("Click Add btn")
    console.log(this.itemService.retrieveItemsById());
  }
}
