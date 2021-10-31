import { Produto } from './produto';
export class Fornecedor {
  public id: number;
  public nome: string;
  public email: string;
  public celular: number;
  public dataCadastro: Date;
  public produto: Produto[]
}
