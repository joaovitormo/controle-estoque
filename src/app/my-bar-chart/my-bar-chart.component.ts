import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  constructor() { }

  @ViewChild("Donnut", { static: true }) elemento: ElementRef;

  ngOnInit(){
    new Chart(this.elemento.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["1 item apenas", "2 itens", "3 itens", "4 itens ou mais"],
        datasets: [
          {
            data: [10,23,26,41 ],
            backgroundColor: [
              'rgba(255, 38, 132, 0.3)',
              'rgba(25, 506, 86, 0.3)',
              'rgba(75, 192, 192, 0.3)',
              'rgba(54, 12, 235, 0.3)',

          ],

          borderWidth: 1,

            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }





}

