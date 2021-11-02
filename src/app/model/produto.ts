import { Fornecedor } from './fornecedor';
import { Pedido } from './pedido';
export class Produto {
  public id: number;
  public nome: string;
  public categoria: string;
  public posicao: string;
  public foto: string;
  public quantidade: number;
  public valor: number;
  public dataCadastro: Date;
  public fornecedores: Fornecedor
  public pedidos: Pedido
}
