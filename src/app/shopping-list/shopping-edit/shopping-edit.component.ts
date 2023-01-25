import { Component, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form: ngForm) {
    const value = form.value; 
    const newIngredient  = new Ingredient(value.name, value.amountß)
    this.slService.addIngredient(newIngredient)  }

}
