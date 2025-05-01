import { Component, OnInit } from '@angular/core';
import { Myintirface } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   recipes : Myintirface[] = [];
   myCommande: any = {
    name: '',
    image: '',
    category: '',
    ingredients: [''],
    steps: ['']
  };
  
  
  
    constructor(private myVar: RecipeService){}
    

    
  ngOnInit(): void {
    this.myVar.getAllRecipes().subscribe(data =>{
      this.recipes=data
      console.log("recipes")
    })
  }
// post
postCommandes(){
  this.myVar.postRecipe(this.myCommande).subscribe((recipe)=>{
    this.recipes =[recipe, ...this.recipes]
  })
}


  

}
