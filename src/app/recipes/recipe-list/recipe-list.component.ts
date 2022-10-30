import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://torontolife.com/wp-content/uploads/2014/06/urban-diplomat-crappy-commute.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
