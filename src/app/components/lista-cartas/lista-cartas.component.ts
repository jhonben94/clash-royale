import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import ClashData from './../../classes/ClashData';
@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.css']
})
export class ListaCartasComponent implements OnInit {

  constructor(public apiService: ApiService, private http: HttpClient) { }
  listaCartas = [];
  listaAuxiliar = [];
  data: any;
  filterargs: string;
  @Input() filtro: string;
  ngOnInit() {
    this.getData();
    this.apiService.currentArena.subscribe(data => this.data = data);
  }
  getData() {
    const endpoint = 'http://www.clashapi.xyz/api/cards';
    this.http.get(endpoint)
      .subscribe( (data: any) => {
        this.listaCartas = data;
        this.listaAuxiliar = data;
      });
   }
   sendData(data) {
     this.apiService.changeIdNameArena(data);
   }


}
