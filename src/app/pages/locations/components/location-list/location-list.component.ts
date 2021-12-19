import { Component, OnInit } from '@angular/core';
import { LocationListService } from './../../services/location-list.service';
import { Ilocation } from './../../models/Ilocation';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  //5 creo variable
  public locations: Ilocation[] = []; 
  //debo conectarme al servicio, ya que la peticioón la hago desde aquí 
  constructor(private locationListService: LocationListService) { } //1 doy parámetros 

  ngOnInit(): void {
    //3 la llamo
    this.recoverLocations(); 
  }

  //2 creo función 
  public recoverLocations(){
    // 2.1 sintaxis igual que siempre, el getLocation llo llama del services 
    this.locationListService.getLocations().subscribe((data:any) => {

      // para mapar necesito hace éstos pasos
      const results : Ilocation[] = data.results; 
      const formatResult = results.map(( {name, type}) => ({ // le doy de parámetro lo que quiero recibir 
        //le digo lo que le devolveré
        name, 
        type

      })); 

      this.locations = formatResult; // le formateo y doy valores

    })
  }
}

//n recuerda insertar en modulo/component en html general 