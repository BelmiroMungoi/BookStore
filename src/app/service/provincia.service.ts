import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) {}

  getProvincias(): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'provincia/');
  }

  getDistritos(id: any): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'provincia/distrito/' + id)
  }
}