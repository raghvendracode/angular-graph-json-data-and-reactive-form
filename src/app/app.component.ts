import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Chart } from 'chart.js';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-app';
  data1: Data[];
  url = 'http://localhost:3000/results';
  month = [];
  price = [];
  chart = [];
  x:any
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
   this.httpClient.get(this.url)
   //.subscribe((mydata) => console.table(mydata));
   .subscribe((res: Data[]) => {
            res.forEach(y => {
    this.month.push(y.month);
    this.price.push(y.price);
  });
  this.chart = new Chart('canvas1', {
    type: 'line',
    data: {
      labels: this.month,
      datasets: [
        {
          data: this.price,
          borderColor: '#3cba9f',
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });
});

}
}
