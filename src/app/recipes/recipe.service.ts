import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";

export class RecipeService { 
    recipeSelected = new EventEmitter<Recipe>();

     private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg', [ 
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 20)
        ]),
        new Recipe('Another test recipe', 'This is a test','https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ] )
      ];

      getRecipes() { 
        return this.recipes.slice()
      }
}