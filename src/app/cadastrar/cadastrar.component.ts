import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  user: Usuario = new Usuario
  tipoUsuario: string


  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(event: any){
    this.authService.cadastrar(this.user).subscribe((resp : Usuario)=> {
      this.user = resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    })
  }

}
