import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: any ={};
  cargada = false;

  constructor( private http: HttpClient ) {


    //console.log('servicio de infoPage listo');

    // Leer el archivo json
    this.http.get('assets/data/data-page.json')
        .subscribe( resp => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);

        });
}
}
