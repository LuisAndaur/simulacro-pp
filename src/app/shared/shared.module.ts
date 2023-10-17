import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    LoaderComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    BotonComponent
   ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    TablaActorComponent,
    TablaPeliculaComponent,
    BotonComponent
   ]
})
export class SharedModule { }
