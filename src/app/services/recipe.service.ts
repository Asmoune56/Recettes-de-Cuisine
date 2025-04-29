import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Recipe } from '../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://localhost:3000/ricipes';

  constructor (private http : HttpClient){}


  getAllRecipes(): Observable <Recipe[]>{
    return this.http.get<Recipe[]>(this.apiUrl);
  }


  getRecipesById(id : number) :Observable <Recipe>{

    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

}
