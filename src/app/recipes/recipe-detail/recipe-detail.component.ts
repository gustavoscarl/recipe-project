import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe: Recipe
  id:number;

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute){}

  onAddToShoppingList(){
    this.recipeService.addIngredientToShop(this.recipe.ingredients)
    this.router.navigate(['shopping-list'])
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }
}
