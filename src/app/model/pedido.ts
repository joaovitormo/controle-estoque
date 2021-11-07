import { Produto } from './produto';
import { Cliente } from './cliente';
export class Pedido {
  public id: number;
  public formPag: String;
	public valorTotal:number;
	public numVezes:number;
  public dataCadastro: Date;
  public produto: Produto[];
  public cliente: Cliente;
  Produto: any;
}
