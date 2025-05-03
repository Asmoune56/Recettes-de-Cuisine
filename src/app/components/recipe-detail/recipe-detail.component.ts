import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get recipe from route data or local array/service
    const id = +this.route.snapshot.paramMap.get('id')!;
    const allRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    this.recipe = allRecipes.find((r: any) => r.id === id);
  }
}
