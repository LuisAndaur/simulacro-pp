import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';

const routes: Routes = [
  { path: 'alta', component: AltaPeliculaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PeliculaRoutingModule { }
