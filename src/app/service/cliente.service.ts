import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/clientes', this.token)
  }

  getByIdCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/clientes/${id}`, this.token)
  }

  getByNomeCliente(nome: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`http://localhost:8080/clientes/nome/${nome}`, this.token)
  }

  postCliente(tema: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/clientes', tema, this.token)
  }

  putCliente(tema: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`http://localhost:8080/clientes/alterar`, tema, this.token)
  }

  deleteCliente(id: number) {
    return this.http.delete(`http://localhost:8080/clientes/${id}`, this.token)
  }
}
