import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  produtoSelecionado: Produto = new Produto()
  tituloPost: string

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }

    this.findAllProdutos()
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.findAllProdutos()
    } else {
      this.produtoService.getByNomeProduto(this.tituloPost).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produtoSelecionado = resp
    })
  }

  apagar(id: number){
    this.produtoService.deleteProduto(id).subscribe(()=>{
      alert('Produto apagado com sucesso!')
      this.findAllProdutos()
    })
  }

  atualizar(){
    this.produtoService.putProduto(this.produtoSelecionado).subscribe((resp: Produto)=>{
      this.produtoSelecionado = resp
      alert('Produto alterado com sucesso!')
      this.findAllProdutos()
    })
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new Produto()
    })
  }


}
