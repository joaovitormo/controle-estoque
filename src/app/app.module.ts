import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { VendasComponent } from './vendas/vendas.component';
import { RealizarVendaComponent } from './realizar-venda/realizar-venda.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    PainelComponent,
    ProdutosComponent,
    ClientesComponent,
    FornecedoresComponent,
    VendasComponent,
    RealizarVendaComponent,
    MyBarChartComponent,
    VerticalBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    ModalModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
