import { Component, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private data: any;

  constructor(private http: Http) {
    this.http.get('./assets/us.geo.json')
      .subscribe(res => {
        this.data = res.json();
        this.createMap();
      });
  }

  ngAfterViewInit(): void {
    this.createGauge();
  }

  createGauge(): void {
    $('#gauge').kendoRadialGauge({
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
      type: 'map',
      center: [39.6924, -97.3370],
      zoom: 3.8,
      zoomable: false,
      layers: [{
        type: 'shape',
        dataSource: this.data.features,
        style: {
          stroke: {
            color: '#A3A396'
          },
          fill: {
            color: '#fff5c8'
          }
        }
      },
      ],
    });
  }
}
