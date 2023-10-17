import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  { path: 'alta', component: AltaActorComponent },
  { path: 'actorpelicula', component: ActorPeliculaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ActorRoutingModule { }
