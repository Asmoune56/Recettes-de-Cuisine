import { Component, OnInit } from '@angular/core';
import { Myintirface } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes : Myintirface[] = [];

  constructor(private recipService: RecipeService){}


  ngOnInit():void{

console.log('hello');


    this.recipService.getAllRecipes().subscribe(data =>{
      this.recipes=data
      console.log("recipes")
    })
  }



}
