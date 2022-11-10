import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService { 
    recipeSelected = new EventEmitter<Recipe>();

     private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg'),
        new Recipe('Another test recipe', 'This is a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg' )
      ];

      getRecipes() { 
        return this.recipes.slice()
      }
}