import { Component, Input, OnInit } from '@angular/core';
import { IcharacterList } from './../../../models/IcharacterList';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() public character!: IcharacterList; // ahora le llamo ! (llega el valor si o si ), le dejo un ? ya que no es seguro que le llegue el dato, proque es externa la api
  
  constructor() { }

  ngOnInit(): void {
  }

}
