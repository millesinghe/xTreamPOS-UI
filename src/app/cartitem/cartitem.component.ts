import { Component, OnInit } from '@angular/core';

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
      {No:"1",Name :"Milk 300g", Unit : "100", Qty:"20"},
      {No:"2",Name :"Coffee 100g", Unit : "200", Qty:"20"},
      {No:"3",Name :"Suger 200g", Unit : "300", Qty:"20"},
      {No:"4",Name :"Milk 300g", Unit : "400", Qty:"20"},
      {No:"5",Name :"Coffee 100g", Unit : "500", Qty:"20"},
      {No:"2",Name :"Coffee 100g", Unit : "200", Qty:"20"},
      {No:"3",Name :"Suger 200g", Unit : "300", Qty:"20"},
      {No:"4",Name :"Milk 300g", Unit : "400", Qty:"20"},
      {No:"5",Name :"Coffee 100g", Unit : "500", Qty:"20"},
      {No:"2",Name :"Coffee 100g", Unit : "200", Qty:"20"},
      {No:"3",Name :"Suger 200g", Unit : "300", Qty:"20"},
      {No:"4",Name :"Milk 300g", Unit : "400", Qty:"20"},
      {No:"5",Name :"Coffee 100g", Unit : "500", Qty:"20"},
    ]
  }

}
