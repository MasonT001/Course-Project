import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  @ViewChild('f') slForm: ngForm
  subscribe: Subscription;
  editMode = false;
  editedItemIndex = number;
  editedItem: Ingredient


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subcription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form: ngForm) {
    const value = form.value; 
    const newIngredient  = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient)  
    }
     this.editMode = false;
     form.rese 
    }

    ngOnDestroy() {
      this.subscription.unsubscribe()
    }

    onClear() {
      this.slForm.reset()
      this.editMode = false;
    }

    onDelete() {
      this.onClear();
      this.slService.deleteIngredient(editedItemIndex)
    }

}
