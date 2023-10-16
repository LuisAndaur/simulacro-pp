import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { pFECHA } from '../../../models/constant/pattern';
import { ActorService } from '../../../services/actor.service';
import { Actor } from '../../../models/class/actor';
import { Genero } from '../../../types/genero';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {

  @ViewChild('select', { static: true }) select!: ElementRef;

  validadorNombre = { minimo: 4, maximo: 20 };
  validadorApellido = { minimo: 4, maximo: 20 };
  validadorAnioNacimiento = { minimo: 1900, maximo: 2022 };
  formulario!: FormGroup;
  pais: string = '';
  tiposDeSexos!: Array<string>;
  cargando: boolean = false;

  constructor(
              private toastService: ToastrService,
              private actorService: ActorService
  ) {}

  ngOnInit(): void {
    this.tiposDeSexos = this.actorService.getGenero();
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validadorNombre.minimo),
        Validators.maxLength(this.validadorNombre.maximo),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validadorApellido.minimo),
        Validators.maxLength(this.validadorApellido.maximo),
      ]),

      fechaDeNacimiento: new FormControl('', [
        Validators.required,
        Validators.pattern(pFECHA),
      ]),
      pais: new FormControl('', [Validators.required]),
    });
  }

  enviar(): void {
    if (this.formulario.valid) {
      const actor = new Actor;
      actor.nombre = this.formulario.get('nombre')?.value;
      actor.apellido = this.formulario.get('apellido')?.value,
      actor.sexo = this.getValorSelect(), //!sexo
      actor.fechaDeNacimiento = this.formulario.get('fechaDeNacimiento')?.value,
      actor.nacionalidad = this.formulario.get('pais')?.value

      this.cargando = true;
      debugger;
      this.actorService
        .setActor(actor)
        .then(
          () => {
            this.toastService.success('Actor/a guardado', '¡ Exito !');
            this.borrar();
          },
          (error) => {
            this.toastService.error(error, '¡ Error !');
          }
        )
        .finally(() => {
          this.cargando = false;
        });
    } else {
      let mensaje = `
      Nombre => entre ${this.validadorNombre.minimo} y ${this.validadorNombre.maximo} caracteres.
      Apellido => entre ${this.validadorApellido.minimo} y ${this.validadorApellido.maximo} caracteres.

      Fecha de nacimiento => dd/mm/aaaa
      Nacionalidad => requerida`;
      this.toastService.error(mensaje, 'Error');
    }
  }

  getValorSelect(): Genero {
    const _select = this.select.nativeElement as HTMLSelectElement;
    return _select.options[_select.selectedIndex].value as Genero;
  }

  setPais(pais: any): void {
    this.formulario.controls['pais'].setValue(pais.translations.spa.common);
  }

  borrar(): void {
    this.formulario.reset();
    this.pais = '';
  }

}
