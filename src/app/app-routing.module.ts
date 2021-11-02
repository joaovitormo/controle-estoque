import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RealizarVendaComponent } from './realizar-venda/realizar-venda.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch:'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'painel', component: PainelComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path: 'vendas', component: VendasComponent},
  {path: 'venda', component: RealizarVendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
