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

  @Input() ItemCart: CartItemBean[];
}
