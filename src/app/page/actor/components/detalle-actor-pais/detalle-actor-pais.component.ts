import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/class/actor';

@Component({
  selector: 'app-detalle-actor-pais',
  templateUrl: './detalle-actor-pais.component.html',
  styleUrls: ['./detalle-actor-pais.component.scss']
})
export class DetalleActorPaisComponent implements OnInit {

  @Input() actor!: Actor | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
