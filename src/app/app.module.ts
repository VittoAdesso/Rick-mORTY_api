import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './pages/characters/components/character-list/character-list.component';
import { CharacterComponent } from './pages/characters/components/character-list/character/character.component';
import { LocationListComponent } from './pages/locations/components/location-list/location-list.component';
import { LocationCardComponent } from './pages/locations/components/location-list/location-card/location-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent, // módulo de lista de personajes
    CharacterComponent, LocationListComponent, LocationCardComponent // módulo de personajes que llevará la lista 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
