import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisNewComponent } from '../componentes/apis-new/apis-new.component';
import { ApisJon } from 'src/app/modelos/apisJon.modelo';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }
  obtenerNew_api()
  {
    return this.http.get<ApisJon[]>('https://run.mocky.io/v3/29e020fe-b583-4609-a8c6-6a183620b196')
  }
}
