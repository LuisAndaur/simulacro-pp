import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IRestCountries } from '../../../../models/interfaces/rest-countries';
import { RestCountriesService } from '../../../../services/rest-countries.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: Array<IRestCountries> = [];
  hayPaises: boolean = false;
  filtrado: string = '';
  @Output('onPais') onPaisChange = new EventEmitter<any>();

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {
    this.restCountriesService.getPaises().subscribe((countries) => {
      this.paises = countries;
      this.hayPaises = !!this.paises;
    });
  }

  enviarPais(pais: any): void {
    this.onPaisChange.emit(pais);
  }

}
