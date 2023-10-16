import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Actor } from 'src/app/models/class/actor';
import { Pelicula } from 'src/app/models/class/pelicula';
import { pFECHA } from 'src/app/models/constant/pattern';
import { ImagenService } from 'src/app/services/imagen.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { GeneroPelicula } from 'src/app/types/genero-pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss']
})
export class AltaPeliculaComponent implements OnInit {

  cargando: boolean = false;
  validadorNombre = { minimo: 4, maximo: 20 };
  validadorFechaDeEstreno = { minimo: 1950, maximo: 2023 };
  validadorCantidadDePublico = { minimo: 1, maximo: 10000 };
  formulario!: FormGroup;
  @ViewChild('imagen', { static: true }) imagen!: ElementRef;
  @ViewChild('select', { static: true }) select!: ElementRef;

  enviado: boolean = false;
  generoPelicula!: Array<GeneroPelicula>;
  actor: Actor | null = null;

  private file: File | null = null;
  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    if (file) {
      this.file = file;
    }
  }

  constructor(
    private toastService: ToastrService,
    private peliculaService: PeliculaService,
    private imagenService: ImagenService
  ) {}

  ngOnInit(): void {
    this.generoPelicula = this.peliculaService.getGeneroPelicula();
    this.formulario = new FormGroup({
      nombrePelicula: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validadorNombre.minimo),
        Validators.maxLength(this.validadorNombre.maximo),
      ]),
      fechaDeEstreno: new FormControl('', [
        Validators.required,
        Validators.pattern(pFECHA),
      ]),
      cantidadDePublico: new FormControl('', [
        Validators.required,
        Validators.min(this.validadorCantidadDePublico.minimo),
        Validators.max(this.validadorCantidadDePublico.maximo),
      ]),
      nombreActor: new FormControl('', [Validators.required]),
    });
  }

  getValorSelect(): GeneroPelicula {
    const _select = this.select.nativeElement as HTMLSelectElement;
    return _select.options[_select.selectedIndex].value as GeneroPelicula;
  }

  enviar(): void {
    if (
      this.formulario.get('nombrePelicula')?.errors ||
      this.formulario.get('fechaDeEstreno')?.errors ||
      this.formulario.get('cantidadDePublico')?.errors ||
      this.formulario.get('nombreActor')?.errors ||
      this.file === null
    ) {
      let mensaje = `
        El nombre puede tener entre ${this.validadorNombre.minimo} y ${this.validadorNombre.maximo} caracteres.
        La fecha tiene la siguiente mascara dd/mm/aaaa (1900 a 2022).
        La cantidad de público debe estar entre ${this.validadorCantidadDePublico.minimo} y ${this.validadorCantidadDePublico.maximo}.
        El actor es requerido.
        La imagen es requerida`;
      this.toastService.error(mensaje, 'Datos invalidos');
    } else {
      this.cargando = true;
      this.imagenService
        .subirImagen(this.file, this.file.name)
        .subscribe((url:any) => {
          const pelicula = new Pelicula();
          pelicula.nombre = this.formulario.get('nombrePelicula')?.value;
          pelicula.genero = this.getValorSelect();
          pelicula.fechaDeEstreno = this.formulario.get('fechaDeEstreno')?.value;
          pelicula.cantidadDePublico = this.formulario.get('cantidadDePublico')?.value;
          pelicula.fotoDeLaPelicula = url,
          pelicula.idActor = (this.actor as any).id;


          this.peliculaService
            .setPelicula(pelicula)
            .then(
              () => {
                this.toastService.success('Se cargó la película', '¡ Éxito !');
                this.borrar();
              },
              (error:any) => {
                this.toastService.error(error, '¡ Error !');
              }
            )
            .finally(() => {
              this.cargando = false;
            });
        });
    }
  }

  borrar(): void {
    this.formulario.reset();
    this.imagen.nativeElement.value = '';
    this.actor = null;
  }

  setearActor(actor: Actor) {
    this.formulario.controls['nombreActor'].setValue(actor.nombre);
    this.actor = actor;
  }

}
