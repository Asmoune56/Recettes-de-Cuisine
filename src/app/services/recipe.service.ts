import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Myintirface,  } from '../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://localhost:3000/ricipes';

  constructor (private http : HttpClient){}

// grt

  getAllRecipes(): Observable <Myintirface[]>{
    return this.http.get<Myintirface[]>(this.apiUrl);
  }

//post

  postRecipe(recipe: any) {
    return this.http.post<Myintirface>(this.apiUrl,recipe);
  }
  


  getRecipesById(id : number) :Observable <Myintirface>{

    return this.http.get<Myintirface>(`${this.apiUrl}/${id}`);
  }

}
