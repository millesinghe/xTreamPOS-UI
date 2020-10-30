import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filteritem',
  templateUrl: './filteritem.component.html',
  styleUrls: ['./filteritem.component.scss']
})
export class FilteritemComponent implements OnInit {

  constructor() { }

  itemList;

  ngOnInit(): void {
    this.itemList = [
      {No:"123456789012345",Name :"Milk 300g"},
      {No:"222",Name :"Coffee 100g"},
      {No:"333",Name :"Suger 200g"},
      
      
    ]
  }
}
