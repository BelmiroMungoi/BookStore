import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'cliente/');
  }

  getClienteById(id: any): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'cliente/' + id);
  }

  saveClientes(cliente: any): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'cliente/', cliente);
  }

  updateCliente(cliente: any): Observable<any> {
    return this.http.put<any>(environment.apiBaseUrl + 'cliente/', cliente);
  }
}
