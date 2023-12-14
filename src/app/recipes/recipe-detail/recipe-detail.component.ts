import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private recipeService:RecipeService){}

  onAddToShoppingList(){
    this.recipeService.addIngredientToShop(this.recipe.ingredients)
  }
}
