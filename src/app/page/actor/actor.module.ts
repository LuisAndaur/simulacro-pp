import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestCountriesService } from '../../services/rest-countries.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@NgModule({
  declarations: [
    AltaActorComponent,
    TablaPaisesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ RestCountriesService, {provide: LOCALE_ID, useValue: 'es'} ]
})
export class ActorModule { }
