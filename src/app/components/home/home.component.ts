declare var bootstrap: any;


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
    ingredients: '',
    steps: ''
  };
  recipe: any;
  
  
  
    constructor(private myVar: RecipeService){}
    

    
  ngOnInit(): void {
    this.myVar.getAllRecipes().subscribe(data =>{
      this.recipes=data
    })
  }
// post
postCommandes(){
  this.myVar.postRecipe(this.myCommande).subscribe((recipe) => {
    this.recipes = [recipe, ...this.recipes]; 
    this.videInput(); 
  });
}


//vide inputs 
 videInput(){
  this.myCommande={
    name: '',
    image: '',
    category: '',
    ingredients: '',
    steps: ''
  }
 }
// edite
editRecipe(recipe: any) {
  this.myCommande = { ...recipe };

  // Ouvre le modal avec Bootstrap 5 (si tu veux l'ouvrir automatiquement)
  const modalElement = document.getElementById('addRecipeModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

deleteRecipe(id: any) {
  console.log('Deleting ID:', id); // ← Ajoute ceci
  this.myVar.delete(id).subscribe(() => {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  });
}





}
