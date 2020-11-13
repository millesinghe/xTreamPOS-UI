import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import Keyboard from 'simple-keyboard';
import { CartItemBean, ItemBean } from '../model/cashierBean';
import { ItemDataService } from '../service/item-data.service';

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {


  static setfocus() {
    let aa = new CashierViewComponent(null);
    aa.setfocustemCode();
  }

  filterItemCode: string;
  filterItemName: string;
  filterItemPrice: number;
  itemList: ItemBean[];
  selectedCartItem: CartItemBean;
  filterTotal: number;
  modelQty: string;
  selectedItemModel: string;
  billTotal: number;
  billDiscount: number;
  grandTotal: number;

  constructor(
    private itemService: ItemDataService
  ) { }

  ngOnInit(): void {
    this.filterTotal = 0.00;
    this.filterItemPrice = 0.00;
    this.billTotal = 0.00
    this.billDiscount = 0.00;
    this.grandTotal = this.billTotal - this.billDiscount;
  }

  setfocustemCode(): void {
    document.getElementById("itemcode").focus()
    console.log("..........focused")
  }

  getBillTotal(event): void {
    this.billTotal = event;
    this.grandTotal = this.billTotal - this.billDiscount;
  }

  addToCart(): void {
    this.resetFilter();
    let item = {} as CartItemBean;

    let itemcode: string = (<HTMLInputElement>document.getElementById("itemcode")).value;
    let itemName: string = (<HTMLInputElement>document.getElementById("ItemName")).textContent;
    let unitPrice: number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty: number = Number((<HTMLInputElement>document.getElementById("qty")).value);

    item.itemNo = itemcode
    item.itemName = itemName;
    item.qty = qty;
    item.unitPrice = unitPrice;
    item.total = unitPrice * qty;
    console.log(item);
    this.selectedCartItem = item;
    console.log("-----END LINE ------");
  }

  resetFilter(): void {
    this.filterTotal = 0.00;
    this.filterItemPrice = 0.00;
    this.filterItemName = "-";
    this.selectedItemModel = ""
    this.itemList = [];
    this.modelQty = '';

  }

  onDiscountKeypress(event: any): void {
    this.billDiscount = event.target.value;
    this.grandTotal = this.billTotal - this.billDiscount;
  }

  onKeypressEvent(event: any): void {
    let value = event.target.value;
    if (value.length > 0) {
      this.itemService.retrieveItemsById(value).subscribe(
        response => this.handleItemCodeSearch(response)
      );
    } else {
      this.itemList = []
    }
  }

  handleItemCodeSearch(response): void {
    this.itemList = response;
  }

  actionPayment(): void {
    new KeyboardEvent('keypress', { 'key': 'a' });
  }

  filterFeedback(item): void {
    try {
      this.filterItemName = item.itemName;
      this.filterItemPrice = item.sellPrice;
      this.selectedItemModel = item.itemNo;
      let qty: number = Number((<HTMLInputElement>document.getElementById("qty")).value);
      this.filterTotal = this.filterItemPrice * qty
    } catch (e) {
      this.filterItemName = "-"
      this.filterItemPrice = 0.00;
    }
  }

  calcTotalPrice(): void {
    let unitPrice: number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty: number = Number((<HTMLInputElement>document.getElementById("qty")).value);
    this.filterTotal = unitPrice * qty
  }

  // a

  keyboard: Keyboard;
 
  onInputFocus() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        'default': [
          '1 2 3','4 5 6','7 8 9','0 {bksp}',
        ],
        'shift': [
        ]
      }
    });
  }

  DeChange() {
    
  }

  onChange = (input: string) => {
    this.selectedItemModel = input;
    console.log('Input changed', input);
  };


  onKeyPress = (button: string) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

}
