import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import Tower from './../../classes/Tower';

@Component({
  selector: 'app-towers',
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.css']
})
export class TowersComponent implements OnInit {
  towerData: [];
  imagenes = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13];
  kingTower: Tower;
  arenaTower: Tower;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTowerData();
    this.kingTower = {};
    this.arenaTower = {};
  }
  getTowerData() {
    const endpoint = `http://www.clashapi.xyz/api/players`;
    this.http.get(endpoint)
      .subscribe( (data: any) => {
          this.towerData = data;
      });
  }
  setTowerData(lvl) {
    if ( typeof this.towerData !== 'undefined' ) {
      this.towerData.forEach( (item) => {

        // @ts-ignore
          if (item.level === lvl) {
            // @ts-ignore
            this.kingTower = new Tower( item.kingsTower );
             // @ts-ignore
            this.arenaTower = new Tower( item.arenaTowers );
          }
      });
    }
  }
}
