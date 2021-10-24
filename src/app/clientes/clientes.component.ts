import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente = new Cliente()
  listaClientes: Cliente[]
  clienteSelecionado: Cliente = new Cliente()
  idCliente: number


  constructor(
    private router: Router,
    private clienteService: ClienteService,

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == '') {
      alert("Sua seção expirou, entre novamente!")
      this.router.navigate(['/entrar'])
    }
    this.findAllClientes()
    console.log(environment.token)

  }

  findByIdCliente(id: number){
    this.clienteService.getByIdCliente(id).subscribe((resp: Cliente) => {
      this.clienteSelecionado = resp
      console.log(this.clienteSelecionado)
    })
  }

  apagar(id: number){
    this.clienteService.deleteCliente(id).subscribe(()=>{
      alert('Cliente apagado com sucesso!')
      this.findAllClientes()
    })
  }

  atualizar(){
    this.clienteService.putCliente(this.clienteSelecionado).subscribe((resp: Cliente)=>{
      this.clienteSelecionado = resp
      alert('Cliente alterado com sucesso!')
      this.findAllClientes()
    })
  }

  findAllClientes(){
    this.clienteService.getAllCliente().subscribe((resp: Cliente[]) => {
      this.listaClientes = resp
    })
  }

  cadastrar(){
    this.clienteService.postCliente(this.cliente).subscribe((resp: Cliente)=> {
      this.cliente = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllClientes()
      this.cliente = new Cliente()
    })
  }

}
