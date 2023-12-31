import { Component} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor(private recipeSerivce: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeSerivce.getRecipes();
  }
}
