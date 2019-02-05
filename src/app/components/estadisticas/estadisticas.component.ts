import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ListaCartasComponent } from '../lista-cartas/lista-cartas.component';
import { ApiService } from 'src/app/services/api.service';
import ClashData from './../../classes/ClashData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  data: any;
  arena: string;
  name: string;
  cost: number;
  descripcion: string;
  type: string;
  rarity: string;
  cardName: string;
  constructor(public apiService: ApiService, public http: HttpClient) { }
  ngOnInit() {
    this.apiService.currentArena.subscribe( data => {

      if ( !( typeof data === 'object' && Object.keys(data).length === 0) ){
        this.data = data;
        this.cardName = data.name;
        this.cost = data.elixirCost;
        this.descripcion = data.description;
        this.type = data.type;
        this.rarity = data.rarity.toLowerCase();
        this.getArenaData(data.arena);
      }
    });
  }

  getArenaData(arenaNumber) {
    const endpoint = `http://www.clashapi.xyz/api/arenas?number=${arenaNumber}`;
    this.http.get(endpoint)
      .subscribe( (data: any) => {
       this.arena = data[0].idName;
       this.name = data[0].name;
      });
  }
}
