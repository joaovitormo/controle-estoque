import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {


  userLogin : UsuarioLogin = new UsuarioLogin()


  constructor(
    private auth: AuthService,
    private router : Router,

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.load();
}

    load() {
      //Session storage salva os dados como string
      (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
      sessionStorage.refresh = false;

      }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UsuarioLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token;
      environment.nome = this.userLogin.nome;
      environment.id = this.userLogin.id;
      environment.tipo = this.userLogin.tipo;

      this.router.navigate(['/painel'])
    }, erro => {
      if(erro.status == 500) {
        alert('Senha incorreta, tente novamente!')
      }
    }
    )
  }

}
