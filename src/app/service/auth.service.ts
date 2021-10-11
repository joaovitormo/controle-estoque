import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  entrar(usuarioLogin : UsuarioLogin) : Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/login', usuarioLogin)
  }

  cadastrar(usuario : Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  putUsuario(usuario : Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('http://localhost:8080/usuarios/alterar', usuario)
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != '') {
      ok = true
    }
    return ok
  }

  adm() {
    let ok: boolean = false;

    if(environment.tipo == 'adm') {
      ok = true
    }

    return ok
  }

}
