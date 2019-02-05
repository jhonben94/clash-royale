import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import ClashData from './../classes/ClashData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private idNameArena = new BehaviorSubject<any>({});
  currentArena = this.idNameArena.asObservable();
  constructor(private http: HttpClient ) { }

  changeIdNameArena( data: any) {
    this.idNameArena.next(data);
  }
}
