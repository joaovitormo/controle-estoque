import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Fornecedor } from '../model/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  getAllFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>('http://localhost:8080/fornecedores', this.token)
  }

  getByIdFornecedor(id: number): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(`http://localhost:8080/fornecedores/${id}`, this.token)
  }

  getByNomeFornecedor(nome: string): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(`http://localhost:8080/fornecedores/nome/${nome}`, this.token)
  }

  postFornecedores(tema: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>('http://localhost:8080/fornecedores', tema, this.token)
  }

  putFornecedor(tema: Fornecedor): Observable<Fornecedor>{
    return this.http.put<Fornecedor>(`http://localhost:8080/fornecedores/alterar`, tema, this.token)
  }

  deleteFornecedor(id: number) {
    return this.http.delete(`http://localhost:8080/fornecedores/${id}`, this.token)
  }
}

