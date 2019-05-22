import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewData } from '../../newdata';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 
  url = 'http://localhost:2900/results';

  daataa: NewData[];
  name = [];
  height = [];
  chart = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
    //.subscribe((data) => console.table(data));
  

    .subscribe( (data: NewData[] ) => {
      console.log(data)
      data.forEach(z => {
        this.name.push(z.name);
        this.height.push(z.height);
      });
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.name,
          datasets: [
            {
              data: this.height,
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
    