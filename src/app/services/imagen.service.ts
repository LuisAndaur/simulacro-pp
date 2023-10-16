import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, concat, defer, ignoreElements } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private storage: AngularFireStorage) {}

  subirImagen(imagen: File, nombre: string): Observable<string> {
    const fileRef = this.storage.ref(nombre);
    const task = this.storage.upload(nombre, imagen);
    return concat(
      task.snapshotChanges().pipe(ignoreElements()),
      defer(() => fileRef.getDownloadURL())
    );
  }
}
