import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://c1.staticflickr.com/2/1441/25154602981_ab2f17e9f8_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
