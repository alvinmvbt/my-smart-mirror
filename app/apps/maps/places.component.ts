import { Component, OnInit, Input } from '@angular/core';

import { MapsService } from './maps.service';
import { config } from './../../config'

@Component({
  selector: 'places',
  template: require('./places.component.html')
})

export class PlacesComponent implements OnInit {
  @Input() query: string;
  places: Object[] = [ ];
  distances: number[] = [ ];

  constructor(private maps: MapsService) { }

  ngOnInit() {
    this.getPlaces(this.query);
  }

  getPlaces(query: string) {
    this.maps.getPlaces('malls nearby')
      .subscribe((res) => {
        this.places = res.results;      
        console.log(this.places);
      });
  }
}