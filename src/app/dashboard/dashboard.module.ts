import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LatestHottestComponent } from './latest-hottest/latest-hottest.component';
import { RecipesViewComponent } from './recipes-view/recipes-view.component';
import { RecipesSortComponent } from './recipes-sort/recipes-sort.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    LatestHottestComponent,
    RecipesViewComponent,
    RecipesSortComponent,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
