import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Test Recipe 2', 'This is test number 2', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShop(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
