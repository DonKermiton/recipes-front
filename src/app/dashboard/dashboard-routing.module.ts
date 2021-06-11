import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';

const routes: Routes = [{path: '', component: DashboardComponent},
  {path: 'add', component: AddRecipeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
