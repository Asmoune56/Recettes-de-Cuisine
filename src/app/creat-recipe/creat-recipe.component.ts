// import { Component } from '@angular/core';
// import { RecipeService } from '../services/recipe.service';
// import { Router } from '@angular/router';
// import { Recipe } from '../model/Recipe';

// @Component({
//   selector: 'app-creat-recipe',
//   templateUrl: './creat-recipe.component.html',
//   styleUrls: ['./creat-recipe.component.css']
// })
// export class CreatRecipeComponent {
//   stepsInput: any;
//   ingredientsInput: any;
 
 
 
//   constructor(private recipeServicee: RecipeService,
//               private router:Router){}

//               formdata : Recipe = {

//                 id : 0,
//                 name:"",
//                 image:"",
//                 category:"",
//                 ingredients: [],
//                 steps: []


//               }

         
              
//               create(){
//                 this.formdata.ingredients = this.ingredientsInput.split(',').map((i: string) => i.trim());
//                 this.formdata.steps = this.stepsInput.split(',').map((s: string) => s.trim());

//                 this.recipeServicee.creatRecipe(this.formdata).subscribe({
//                   next:(data) =>{
//                     this.router.navigate(["/home"]);
//                   }
//                 })
//               }
              
// }
