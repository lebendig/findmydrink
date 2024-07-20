import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './component/drink-list/drink-list.component';
import { DrinkFormComponent } from './component/drink-form/drink-form.component';


const routes: Routes = [
  { path: '', component: DrinkListComponent },
  { path: 'add', component: DrinkFormComponent },
  { path: 'edit/:id', component: DrinkFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
