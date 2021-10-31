import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Fornecedor } from '../model/fornecedor';
import { FornecedorService } from '../service/fornecedor.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor()
  listaFornecedores: Fornecedor[]
  fornecedorSelecionado: Fornecedor = new Fornecedor()
  idFornecedor: number
  tituloPost: string

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }
    this.findAllFornecedores()
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.findAllFornecedores()
    } else {
      this.fornecedorService.getByNomeFornecedor(this.tituloPost).subscribe((resp: Fornecedor[]) => {
        this.listaFornecedores = resp
      })
    }
  }

  findByIdFornecedor(id: number){
    this.fornecedorService.getByIdFornecedor(id).subscribe((resp: Fornecedor) => {
      this.fornecedorSelecionado = resp
      console.log(this.fornecedorSelecionado)
    })
  }

  apagar(id: number){
    this.fornecedorService.deleteFornecedor(id).subscribe(()=>{
      alert('Fornecedor apagado com sucesso!')
      this.findAllFornecedores()
    })
  }

  atualizar(){
    this.fornecedorService.putFornecedor(this.fornecedorSelecionado).subscribe((resp: Fornecedor)=>{
      this.fornecedorSelecionado = resp
      alert('Fornecedor alterado com sucesso!')
      this.findAllFornecedores()
    })
  }

  findAllFornecedores(){
    this.fornecedorService.getAllFornecedor().subscribe((resp: Fornecedor[]) => {
      this.listaFornecedores = resp
    })
  }

  cadastrar(){
    this.fornecedorService.postFornecedor(this.fornecedor).subscribe((resp: Fornecedor)=> {
      this.fornecedor = resp
      alert('Fornecedor cadastrado com sucesso!')
      this.findAllFornecedores()
      this.fornecedor = new Fornecedor()
    })
  }
}
