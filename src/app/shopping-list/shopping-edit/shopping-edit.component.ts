import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output()shoppingListItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }


  addShoppingListItem(itemName:string, itemAmount:number){
   this.shoppingListItem.emit({name:itemName, amount:itemAmount});
  }

}
