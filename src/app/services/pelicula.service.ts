import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/class/pelicula';
import { GeneroPelicula } from '../types/genero-pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private coleccion: any;

  constructor(private firestore: Firestore) {
    this.coleccion = collection(this.firestore, 'peliculas');
  }

  getPeliculas(): Observable<Array<Pelicula>> {
    return collectionData(this.coleccion, { idField: 'id' });
  }

  setPelicula(pelicula: Pelicula): Promise<DocumentReference<any>> {
    return addDoc(this.coleccion, { ...pelicula });
  }

  getGeneroPelicula(): Array<GeneroPelicula> {
    return ['Terror', 'Comedia', 'Romance', 'Otros'];
  }
}
