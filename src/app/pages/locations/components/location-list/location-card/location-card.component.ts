import { Component, Input, OnInit } from '@angular/core';
import { Ilocation } from './../../../models/Ilocation';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() public location!: Ilocation; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
