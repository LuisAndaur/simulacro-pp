import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/class/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent {

  showTable: boolean = true;
  @Input() peliculas: Array<Pelicula> = [];
  @Input() hayPeliculas!: boolean;
  @Output() onPeliculaEspecifica = new EventEmitter<Pelicula>();

  enviarPelicula(pelicula: Pelicula) {
    this.onPeliculaEspecifica.emit(pelicula);
  }
}
