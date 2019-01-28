import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('mango', 5),
    new Ingredient('mango', 5),
    new Ingredient('mango', 5),
    new Ingredient('mango', 5),

  ];
  constructor() { }

  ngOnInit() {
  }

  AddItemInShoppinglist(shoppingListItem:Ingredient){
    this.ingredients.push(shoppingListItem);
  }

}
