import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/class/actor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  actor!: Actor;

  constructor() { }

  ngOnInit(): void {
  }

  setearActor(actor: Actor): void {
    this.actor = actor;
  }

}
