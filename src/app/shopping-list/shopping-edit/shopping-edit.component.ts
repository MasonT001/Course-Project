import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  editMode = false;
  editedItemIndex = number;


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subcription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    );
  }

  onAddItem(form: ngForm) {
    const value = form.value; 
    const newIngredient  = new Ingredient(value.name, value.amountß)
    this.slService.addIngredient(newIngredient)  }

    ngOnDestroy() {
      this.subscription.unsubscribe()
    }

}
