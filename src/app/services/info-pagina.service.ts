import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = { };
  carga:boolean = false;

  equipo: any[] = [];
  

  constructor(private http: HttpClient) { 
      
    this.cargarInfo();
    this.cargarEquipo();
    

  }

  private cargarInfo(){
    
    // leer el archivo JSON para 
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina ) => {
        this.carga = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-24c20-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:any [] ) => {
      this.equipo = resp;
    });
  }


}
