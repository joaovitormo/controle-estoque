import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/pedido';
import { Produto } from '../model/produto';
import { PedidoService } from '../service/pedido.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-realizar-venda',
  templateUrl: './realizar-venda.component.html',
  styleUrls: ['./realizar-venda.component.css']
})
export class RealizarVendaComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  produtoSelecionado: Produto = new Produto()
  tituloPost: string

  listaPedido: Produto[] = []


  pedido:  Pedido = new Pedido();


  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }

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

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  adicionarLista(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
    this.produtoSelecionado = resp
    console.log(resp)
    this.listaPedido.push({...resp})
    this.pedidoService.postPedido(this.pedido.Produto).subscribe((resp: Pedido)=> {
      this.pedido = resp
      alert('Produto cadastrado com sucesso!')
      this.pedido = new Pedido()
    })
  })
}
}
