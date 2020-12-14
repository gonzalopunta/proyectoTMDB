import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaResponse } from '../Interfaces/personas-response.interface';
import { HttpClient } from '@angular/common/http';

const URL_BASE = "https://api.themoviedb.org/3/person/";
const API_KEY = "2f58f493b1da109ec36e32dde701c028";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  public getActores(): Observable<PersonaResponse> {
      return this.http.get<PersonaResponse>( 
        URL_BASE + "popular?api_key=" + API_KEY
      );
  }
}
