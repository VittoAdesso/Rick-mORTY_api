import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './pages/characters/components/character-list/character-list.component';
import { CharacterComponent } from './pages/characters/components/character-list/character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent, // módulo de lista de personajes
    CharacterComponent // módulo de personajes que llevará la lista 
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
