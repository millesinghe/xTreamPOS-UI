import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartItemBean } from '../service/item-data.service';

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
      console.log("++>"+this.cartList)
    }
  }

  @Input() ItemCart: CartItemBean[];
}
