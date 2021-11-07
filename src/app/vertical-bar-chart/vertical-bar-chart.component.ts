import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {

  constructor() { }


  @ViewChild("Horizontal", { static: true }) elemento: ElementRef;

  ngOnInit(){
    new Chart(this.elemento.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ["Prego 18x21", "Cimento", "Torneira p/ pia", "Curva 3/4 Água", "Tinta Spray Vermelha", "Argamassa", "Arame Torcido", "Cano 3/4 Água", "Fio 2,5mm preto (metros)", "Martelo"],
        datasets: [
          {
            data: [1522, 683, 629, 611, 580, 502, 495, 332, 256, 189 ],
            backgroundColor: [

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
