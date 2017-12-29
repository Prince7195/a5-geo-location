import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  markers: any;

  constructor(private geoService: GeoService) { }

  ngOnInit() {
    // this.seedDatabase();
    this.getUserLocation();
    this.geoService.hits.subscribe(hits => this.markers = hits);
    console.log(this.markers);
  }

  private seedDatabase() {
    let dummyPoints = [
      [37.9, -122.1],
      [38.7, -122.2],
      [38.1, -122.3],
      [38.3, -122.0],
      [38.7, -122.1]
    ]
    dummyPoints.forEach((val, idx) => {
      let name = `dummy-location-${idx}`
      console.log(idx)
      this.geoService.setLocation(name, val)
    })
  }

  getUserLocation() {
    // locate the user
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geoService.getLocations(500, [this.lat, this.lng])
      });
    }
  }

}
