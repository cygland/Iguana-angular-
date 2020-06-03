import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any [] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo ();
    this.cargarEquipo ();
}
private cargarInfo() {

this.http.get('assets/data/data-page.json')
.subscribe( (resp: InfoPagina) => {

  this.cargada = true;
  this.info = resp;
  });
  }

private cargarEquipo() {

this.http.get('https://iguana-html.firebaseio.com/equipo.json')
.subscribe( (resp: any[]) => {

    this.equipo = resp;
    /* console.log(resp); */
});

}



}
