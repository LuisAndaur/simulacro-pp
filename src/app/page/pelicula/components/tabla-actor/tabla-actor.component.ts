import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/class/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  actores: Array<Actor> = [];
  hayActores: boolean = true;
  @Output() onActorEspecifico = new EventEmitter<Actor>();

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getActores().subscribe((_actores) => {
      this.hayActores = !_actores;
      this.actores = _actores;
    });
  }

  enviarActor(actor: Actor) {
    this.onActorEspecifico.emit(actor);
  }

}
