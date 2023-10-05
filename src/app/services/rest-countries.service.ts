import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestCountries } from '../models/interfaces/rest-countries';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  private url: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<Array<IRestCountries>> {
    return this.http.get<Array<IRestCountries>>(this.url);
  }

}
