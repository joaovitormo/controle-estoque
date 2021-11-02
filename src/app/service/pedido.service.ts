import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPedido(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>('http://localhost:8080/pedidos', this.token)
  }

  getByIdPedido(id: number): Observable<Pedido>{
    return this.http.get<Pedido>(`http://localhost:8080/pedidos/${id}`, this.token)
  }

  postPedido(tema: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>('http://localhost:8080/pedidos', tema, this.token)
  }

  putPedido(tema: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(`http://localhost:8080/pedidos/alterar`, tema, this.token)
  }

  deletePedido(id: number) {
    return this.http.delete(`http://localhost:8080/pedidos/${id}`, this.token)
  }
}
