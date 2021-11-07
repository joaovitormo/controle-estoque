import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  user: Usuario = new Usuario()
  constructor(
    private router: Router,
  ) { }
  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef;

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
          {
            data: [652,712,816,831,814,686,794,765,622,955,114,0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132)',
            'rgba(255, 206, 86)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(54, 162, 235)',
            'rgba(255, 99, 132)',
            'rgba(255, 206, 86)',
            'rgba(255, 206, 86)',
            'rgba(255, 99, 132)',
            'rgba(75, 192, 192)',
            'rgba(255, 99, 132)',
            'rgba(255, 99, 132)',
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
