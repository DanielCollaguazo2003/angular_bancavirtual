import { Cuenta } from "./Cuenta";

export class Movimiento {
  codigo?: number;
  tansaccion?: string;
  tipo?: boolean;
  fecha?: Date;
  valor?: number;
  nCuenta?: Cuenta;
}
