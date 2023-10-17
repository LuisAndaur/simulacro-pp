import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { PeliculaRoutingModule } from './pelicula-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AltaPeliculaComponent
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
