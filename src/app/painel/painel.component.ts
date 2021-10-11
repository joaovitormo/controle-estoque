import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';

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

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }
  }



}
