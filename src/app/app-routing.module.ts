import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DumbComponent1Component } from './recipes/stupid-components/dumb-component-1/dumb-component-1.component';


const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch:'full'},
  { path: 'recipes', component: RecipesComponent,
     children: [
      {path: '', component: DumbComponent1Component},
      {path: ':id', component: RecipeDetailComponent}
    ] },
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
