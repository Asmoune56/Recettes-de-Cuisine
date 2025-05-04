import { Component, OnInit } from '@angular/core';
import { Myintirface } from 'src/app/model/Recipe'; // Assure-toi que le chemin est correct
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Myintirface[] = [];

  constructor(private recipService: RecipeService) {}

  ngOnInit(): void {
    console.log('Hello from RecipeListComponent!'); 

    this.recipService.getAllRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        console.log('Recipes:', this.recipes); 
      },
      error: (err) => {
        console.error('Error fetching recipes:', err); 
      }
    });
  }
}
