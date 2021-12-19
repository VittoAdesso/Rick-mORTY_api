import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // impoorto del modulo para poder hacer peticiones, simplifica el fecth a las apis 

@Injectable({
  providedIn: 'root'
})

export class CharacterListService {

  //1
  private baseUrl: string = "https://rickandmortyapi.com/api/character";  // creo variable priovada con url get de la api y obtener todos los caracters , debe ser privada que sea privada para que nadie la vea

  //inyectamos dependencias con el contsructuctor 
//2 
  constructor(private http: HttpClient) { }

//3 lo que quiero recuperar , con un modulo estilo función  (clase)
public getCharacters(){
  //4 método http.get == recuerda que http es httpClient que lo recoge del módulo... 
  return this.http.get(this.baseUrl); // ésto es el fetch de antes que usaba sólo con js 
  //recupera datos
}


/* //5 para crear (no en todas las apis dejan hacer post)
public postCharacters(info: any){ //info any: de cualquier tipo
  return this.http.post(this.baseUrl,info);  // le paso una url + una info 
  //modificaciones
  } */

  // ya estaría configurado
  //voy al compionente padre que es el character-list 

}
