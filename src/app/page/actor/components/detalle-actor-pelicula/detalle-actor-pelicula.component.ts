import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/models/class/actor';
import { Pelicula } from 'src/app/models/class/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-actor-pelicula',
  templateUrl: './detalle-actor-pelicula.component.html',
  styleUrls: ['./detalle-actor-pelicula.component.scss']
})
export class DetalleActorPeliculaComponent {

  @Input() actor!: Actor | undefined;
  actorId: string = "";

  subscripcionPeliculas!: Subscription;
  peliculas: Array<Pelicula> = [];
  hayPeliculas: boolean = false;

  constructor(private peliculasService: PeliculaService) {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.actor);
    if (this.actor) {
      this.subscripcionPeliculas = this.peliculasService
        .getPeliculasPorActor(this.actor.id)
        .subscribe((peliculas) => {
          this.peliculas = peliculas;
          this.hayPeliculas = !!this.peliculas;
          // console.log(this.peliculas);
          this.subscripcionPeliculas.unsubscribe();
        });
    }
  }

}
