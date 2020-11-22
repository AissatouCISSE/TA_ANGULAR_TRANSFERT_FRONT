import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTransfertComponent } from './create-transfert/create-transfert.component';

const routes: Routes = [
  { path: '', redirectTo: 'envoyer', pathMatch: 'full' },
  { path: 'add', component: CreateTransfertComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
