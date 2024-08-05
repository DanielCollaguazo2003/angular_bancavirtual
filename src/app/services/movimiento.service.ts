import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private http: HttpClient) { }
  
  public getMovimientosPorCuenta(numero: number) {
    let url = environment.WS_PATH + `/movimientos/${numero}`
    return this.http.get<any>(url);
  }

}
