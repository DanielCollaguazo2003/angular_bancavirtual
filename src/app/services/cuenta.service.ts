import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }
  public getCuenta(numero: number) {
    let url = environment.WS_PATH + `/cuentas/${numero}`
    return this.http.get<any>(url);
  }

}
