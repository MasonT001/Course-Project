import { EventEmitter, Inject } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
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

      constructor(private slService: ShoppingListService) {}
      

      getRecipes() { 
        return this.recipes.slice()
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients)
      }
}