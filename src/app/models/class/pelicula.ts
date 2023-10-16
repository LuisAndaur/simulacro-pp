import { GeneroPelicula } from "src/app/types/genero-pelicula";

export class Pelicula {
  id?: number;
  nombre!: string;
  genero!: GeneroPelicula;
  fechaDeEstreno!: string;
  cantidadDePublico!: number;
  fotoDeLaPelicula!: string;
  idActor?: number;
}
