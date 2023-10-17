import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRestCountries } from '../../../../models/interfaces/rest-countries';
import { RestCountriesService } from '../../../../services/rest-countries.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: Array<IRestCountries> = [];
  @Input() filtrado: string = '';
  @Input() bloquear: boolean = false;
  @Output('onPais') onPaisChange = new EventEmitter<any>();

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {
    this.restCountriesService.getPaises().subscribe((countries) => {
      this.paises = countries;
    });
  }

  enviarPais(pais: any): void {
    this.onPaisChange.emit(pais);
  }

  filtradoFuncion(pais: any): boolean {
    if (this.bloquear) {
      return (
        pais.translations.spa.common.toLowerCase() ==
        this.filtrado.toLowerCase()
      );
    }
    return pais.translations.spa.common
      .toLowerCase()
      .includes(this.filtrado.toLowerCase());
  }

}
