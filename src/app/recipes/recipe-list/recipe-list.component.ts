import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  recipes:Recipe[] = [
    new Recipe('pizz','A delicious dish','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/cb2e9502cd9da3468caa944e15527b19bce68a8e'),
    new Recipe('Another pizz','A another delicious dish','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/cb2e9502cd9da3468caa944e15527b19bce68a8e'),
    new Recipe('pizz','A delicious dish','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/cb2e9502cd9da3468caa944e15527b19bce68a8e'),
    new Recipe('pizz','A delicious dish','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/cb2e9502cd9da3468caa944e15527b19bce68a8e')
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
