declare var bootstrap: any;


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  myCondition = false;
  bootstrap: any;

  
  
  
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
    this.modalInstance.hide(); 
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
  this.myCommande = recipe;
  this.myCondition = true;
  this.modalInstance.hide();

  // Ouvre le modal avec Bootstrap 5 (si tu veux l'ouvrir automatiquement)
  const modalElement = document.getElementById('addRecipeModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  

}

updateRecipe(){
  this.myVar.updateRecipe(this.myCommande).subscribe( commande =>{
    this.videInput();
    this.myCondition = false;
    this.modalInstance.hide(); // Fermer le modal

  })
}

deleteRecipe(id: any) {
  this.myVar.delete(id).subscribe(() => {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  });
}

@ViewChild('modal') modalElement!: ElementRef;
private modalInstance: any;

ngAfterViewInit() {
  this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
}






}
