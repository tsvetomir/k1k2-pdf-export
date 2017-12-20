import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createGauge();
    this.createMap();
  }

  createGauge(): void {
    $('#gauge').kendoLinearGauge({
      pointer: {
        value: 28
      },

      scale: {
        majorUnit: 20,
        minorUnit: 2,
        min: -40,
        max: 60,
        vertical: true,
        ranges: [
          {
            from: -40,
            to: -20,
            color: '#2798df'
          }, {
            from: 30,
            to: 45,
            color: '#ffc700'
          }, {
            from: 45,
            to: 60,
            color: '#c20000'
          }
        ]
      }
    });
  }

  createMap(): any {
    $('#map').kendoMap({
      center: [30.268107, -97.744821],
      zoom: 3,
      layers: [{
        type: 'tile',
        urlTemplate: 'http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
      }]
    });
  }
}
