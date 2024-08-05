import { Movimiento } from "./Movimiento";

export class Cuenta {
  numero?: number;
  cedula?: string;
  nombre?: string;
  usuario?: string;
  clave?: string;
  listaMovimientos?: Movimiento[];
}
