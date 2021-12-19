import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationListService {

// aquí le digo que url va  a tomar 
  private baseUrl: string = "https://rickandmortyapi.com/api/location"; 

  constructor(private http: HttpClient) { } // le doy los parñametros, como en characters

  public getLocations(){
  return this.http.get(this.baseUrl);  // le digo que me haga el get y se ubique en la url de arriba
  }
}

// ahora me voy a location.list component 