import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Actor } from '../models/class/actor';
import { Observable } from 'rxjs';
import { Genero } from '../types/genero';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private coleccion: any;

  constructor(private firestore: Firestore) {
    this.coleccion = collection(this.firestore, 'actores');
  }

  getActores(): Observable<Array<Actor>> {
    return collectionData(this.coleccion, { idField: 'id' });
  }

  setActor(actor: Actor): Promise<DocumentReference<any>> {
    return addDoc(this.coleccion, { ...actor });
  }

  getGenero(): Array<Genero> {
    return ['Masculino', 'Femenino', 'Otro'];
  }
}
