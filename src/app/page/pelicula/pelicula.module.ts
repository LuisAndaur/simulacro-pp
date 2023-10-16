import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { PeliculaRoutingModule } from './pelicula-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AltaPeliculaComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PeliculaModule { }
