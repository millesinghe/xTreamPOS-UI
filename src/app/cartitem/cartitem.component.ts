import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItemBean } from '../model/cashierBean';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {

  constructor() { }

  cartList;

  ngOnInit(): void {
    this.cartList = [
      // {No:"1",Name :"Milk 300g", Unit : "100", Qty:"20"},
      // {No:"2",Name :"Coffee 100g", Unit : "200", Qty:"20"},
      
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cartList != undefined) {
      this.cartList.push(this.ItemCart);
      this.calcsGrandTotal();
    }
  }

  removeItem(event): void{
    let removeButton :string =event.currentTarget.id;
    let aa = removeButton.split('btn_');
    let removeId : number = Number(removeButton.split('btn_')[1]);
    let bb = this.cartList;
    this.cartList.splice(removeId,1)
    let cc = this.cartList;

    console.log(removeId)

  }

  calcsGrandTotal() : void{
    let billTotal = 0.00;
    for (let item of this.cartList) {
      billTotal = billTotal + item.total
    }
    this.billTotalAmountEmitter.emit(billTotal);
    console.log(billTotal)
  }


  @Input() ItemCart: CartItemBean[];

  @Output() billTotalAmountEmitter : EventEmitter<any> = new EventEmitter<any>();
}
