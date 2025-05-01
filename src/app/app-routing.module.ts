import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

{path: "" , component : HomeComponent},
{path: "home" , component : HomeComponent},
{path: "recettes" , component : RecipeListComponent},
{path: "recette/:id" , component : RecipeDetailComponent},
{path: "login" , component : LoginComponent},
{path: "**" , component : HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
