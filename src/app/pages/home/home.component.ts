import { Component } from '@angular/core';
import { Cuenta } from 'src/app/model/Cuenta';
import { Movimiento } from 'src/app/model/Movimiento';
import { CuentaService } from 'src/app/services/cuenta.service';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cuenta: Cuenta | undefined;
  movimientos: Movimiento[] = [];
  numeroCuenta: number = 0;

  constructor(private cuentaService: CuentaService, private movimientoService: MovimientoService) { }

  ngOnInit(): void {
  }

  getCuenta(): void {
    this.cuentaService.getCuenta(this.numeroCuenta).subscribe(data => {
      this.cuenta = data;
      this.getMovimientos(); // Llama a obtener los movimientos después de obtener la cuenta
    });
  }

  getMovimientos(): void {
    if (this.numeroCuenta) {
      this.movimientoService.getMovimientosPorCuenta(this.numeroCuenta).subscribe(data => {
        this.movimientos = data;
        console.log(this.movimientos)
      });
    }
  }
}
