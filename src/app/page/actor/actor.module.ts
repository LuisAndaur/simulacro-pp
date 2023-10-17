import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestCountriesService } from '../../services/rest-countries.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetalleActorPeliculaComponent } from './components/detalle-actor-pelicula/detalle-actor-pelicula.component';
import { DetalleActorPaisComponent } from './components/detalle-actor-pais/detalle-actor-pais.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';

@NgModule({
  declarations: [
    AltaActorComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    DetalleActorPeliculaComponent,
    DetalleActorPaisComponent,
    DetalleActorComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ RestCountriesService, {provide: LOCALE_ID, useValue: 'es'} ]
})
export class ActorModule { }
