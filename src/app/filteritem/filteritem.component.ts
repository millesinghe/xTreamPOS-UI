import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit,  OnChanges, SimpleChanges } from '@angular/core';
import { ItemBean } from '../service/item-data.service';

@Component({
  selector: 'app-filteritem',
  templateUrl: './filteritem.component.html',
  styleUrls: ['./filteritem.component.scss']
})
export class FilteritemComponent implements OnInit, OnChanges {

  itemList : ItemBean[]

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.itemList =this.selectedItemList;
  }

  ngOnInit(): void {
    this.itemList = [
      // {No:"123456789012345",Name :"Milk 300g"},
      // {No:"222",Name :"Coffee 100g"},
      // {No:"333",Name :"Suger 200g"},
    ]
  }

  selectedItem(item) : void{
    this.selectedItemByFilter.emit(item);
  }

  @Input() selectedItemList: ItemBean[];

  @Output() selectedItemByFilter: EventEmitter<any> = new EventEmitter<any>();
}
