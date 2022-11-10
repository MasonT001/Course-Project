import { Ingredient } from "../shared/ingredients.model"

export class ShoppingListService { 
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Bread', 1)
      ]

      getIngredients() {
        return this.ingredients.slice()
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
      }
}