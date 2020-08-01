import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FoodGuardGuard} from './food-guard.guard' ;


const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , canActivate:[FoodGuardGuard] ,component:HomeComponent} ,
  {path:"contacts", canActivate:[FoodGuardGuard] , component:ContactsComponent} ,
  {path:"recipe/:id" , component:RecipeComponent} ,
  {path:"register" , component:RegisterComponent} ,
  {path:"login" , component:LoginComponent} 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
