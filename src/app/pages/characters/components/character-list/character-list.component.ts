// siempre es igual 

import { Component, OnInit } from '@angular/core';
import { IcharacterList } from '../../models/IcharacterList';
import { CharacterListService } from '../../services/character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {

  //2 creo variable donde almaceno lo que me arrojala lista

      public CharacterList: IcharacterList[] = []; // es una variable que tiene el modelo que creé pero tipo array 

      //1 le digo que uso un class que la tengo en el servicio e importo el de la derecha 
      // me conecto al servico
      constructor(private characterListService: CharacterListService ) { } // ahí dentro estoy llamadando ua variable que se llama abajo tb == lo conecta ...... le dice esa variable será un get, y con es un array me almacenará varios get y resultads 

      ngOnInit(): void {
        //6 le llamo a la función creada abajo
        this.recoverList(); 
        //lo llamo aquí por es asincrono
      }

      //3 creo función que me recupere, conecte y guarde todo
      public recoverList(){
        //4 siemopre igual , conecta al this.servicio. le doy un método (ge+name).suscribe(método)(dentro le digo que reciba información más funcióna arrpow)
            this.characterListService.getCharacters().subscribe((data: any) =>{ // como es pública lo dejo tipo any, paa no tiparla completa
          // le paso una función autoejecutada, poque va dentro del par´ametro de subcribe... (call back)

        //5ahora, como quiero que me arroje datos.. voy a crear una constante y la voy a mapear 
          //7
          const results: IcharacterList[] = data.results; 
          const trasnformCharacter = results.map(({name, image}) => ({ // paso los parámetrod que quiero enviar 
            name, 
            image

          })); 
                //7 llamo  a la variable y le digo que vakle data  (asigno valor)
                this.CharacterList = trasnformCharacter; // ésto se lo paso a su hijo al character, pero lo pinto en character-list mira ejemplo
          })
    }
}


// lo voy a pintra ahora en el html ppal character list
