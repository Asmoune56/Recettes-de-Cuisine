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


  filteredRecipes: Myintirface[] = [];

  
  
  
    constructor(private myVar: RecipeService){}
    

    
  ngOnInit(): void {
    this.myVar.getAllRecipes().subscribe(data =>{
      this.recipes=data;
      this.filteredRecipes = data;

    })
  }

  search(event: any) {
    const keyword = event.value.toLowerCase();
  
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(keyword) ||
      recipe.category.toLowerCase().includes(keyword)
    );
  }





// post
postCommandes(){
  this.myVar.postRecipe(this.myCommande).subscribe((recipe) => {
    this.recipes = [recipe, ...this.recipes]; 
    this.filteredRecipes = [recipe, ...this.filteredRecipes];

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

  // Ouvre le modal avec Bootstrap 5 (si tu veux l'ouvrir automatiquement)
  const modalElement = document.getElementById('addRecipeModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  

}

updateRecipe() {
  this.myVar.updateRecipe(this.myCommande).subscribe(
    (updatedRecipe) => {
      // تحديث البيانات في القائمة
      this.recipes = this.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r);
      this.filteredRecipes = this.recipes;

      // مسح الفورم وإعادة الوضع العادي
      this.videInput();
      this.myCondition = false;

      // إغلاق المودال بطريقة آمنة
      const modalEl = document.getElementById('addRecipeModal');
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal?.hide();
      }
    },
    error => {
      console.error("Erreur lors de la mise à jour:", error);
    }
  );
}


deleteRecipe(id: number) {
  this.myVar.delete(id).subscribe(() => {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.filteredRecipes = this.filteredRecipes.filter(recipe => recipe.id !== id);

  });
}

@ViewChild('modal') modalElement!: ElementRef;
private modalInstance: any;

ngAfterViewInit() {
  this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
}



}
