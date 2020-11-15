import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import Keyboard from 'simple-keyboard';
import { CartItemBean, ItemBean } from '../model/cashierBean';
import { GlobalRule } from '../model/validator';
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

  keyboard: Keyboard;
  cursor: string;

  constructor(
    private itemService: ItemDataService
  ) { }

  ngOnInit(): void {
    this.filterTotal = 0.00;
    this.filterItemPrice = 0.00;
    this.billTotal = 0.00
    this.billDiscount = 0.00;
    this.grandTotal = this.billTotal - this.billDiscount;

    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        'default': [
          '1 2 3', '4 5 6', '7 8 9', '. 0 {bksp}',
        ],
        'shift': [
        ]
      }
    });
  }

  setfocustemCode(): void {
    document.getElementById("itemcode").focus()
    console.log("..........focused")
  }

  resetFilter(): void {
    this.filterTotal = 0.00;
    this.filterItemPrice = 0.00;
    this.filterItemName = "-";
    this.selectedItemModel = ""
    this.itemList = [];
    this.modelQty = '';

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

  onDiscountKeypress(event: any): void {
    this.billDiscount = event.target.value;
    this.getDiscountCalc();
  }

  getDiscountCalc() :void{
    this.grandTotal = this.billTotal - this.billDiscount;
  }

  onKeypressEvent(event: any): void {
    let value = event.target.value;
    this.callItemFilter(value);
  }

  callItemFilter(value) : void {
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

  calcTotalPrice(qtyUpdate): void {
    let unitPrice: number = Number((<HTMLInputElement>document.getElementById("unitPrice")).textContent);
    let qty: number
    if (qtyUpdate == null){
      qty = Number((<HTMLInputElement>document.getElementById("qty")).value);
    }
    else {
      qty = qtyUpdate;
    }
      this.filterTotal = unitPrice * qty
  }

  // a

  onInputFocus(inpuId) :void {
    if(this.cursor != inpuId.id){
      this.keyboard.clearInput();
      this.cursor = inpuId.id;
    }  
  }

  DeChange() {

  }

  onChange = (input: string) => {
   
    switch (this.cursor) {
      case "itemcode": {
        this.selectedItemModel = input;
        this.callItemFilter(this.selectedItemModel);
        break;
      }
      case "qty": {
        let status = GlobalRule.validateDecimal(input)
        if (status){
          this.modelQty = input;
          this.calcTotalPrice(this.modelQty);
        }
        break;
      }
      case "discount": {
        let status = GlobalRule.validateDecimal(input)
        if (status){
          this.billDiscount = Number(input);
          this.getDiscountCalc();
        }
        break;
      }
      default: {
        //statements; 
        return;
      }
    }

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
