import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/servicios/apis.service';
import { ApisJon } from 'src/app/modelos/apisJon.modelo';
@Component({
  selector: 'app-apis-new',
  templateUrl: './apis-new.component.html',
  styleUrls: ['./apis-new.component.css']
})
export class ApisNewComponent implements OnInit{
  listaProductos:ApisJon[] = []
  constructor(private api:ApisService){}

  ngOnInit(): void {
    this.api.obtenerNew_api()
    .subscribe((data)=>{
      console.log(data)
      this.listaProductos = data;
    })
  }

}
