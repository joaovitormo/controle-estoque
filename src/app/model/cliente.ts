import { Pedido } from './pedido';
export class Cliente {
  public id: number;
  public nome: string;
  public email: string;
  public celular: number;
  public dataCadastro: Date;
  public pedidos: Pedido[]
}
