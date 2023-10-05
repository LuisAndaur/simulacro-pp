import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './alta-actor/alta-actor.component';

const routes: Routes = [
  { path: 'alta', component: AltaActorComponent,
    children: [
      { path: '', component: AltaActorComponent },
      { path: '**', component: AltaActorComponent }
  ]}
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
