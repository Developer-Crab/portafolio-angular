import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.inteface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise<void>( (resolve, reject) =>{
          
      this.http.get('https://angular-html-24c20-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
      });

    });

  
  }

  getProducto(id: string){

   return this.http.get(`https://angular-html-24c20-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }

  buscarProducto( termino: string ) { 

    if(this.productos.length === 0){
      // cargam productos 
      this.cargarProductos().then(  ()=>{
          // ejecutar despues de tener los producto 
          // aplicar el filtro
          this.filtrarProductos( termino );
      });
    }else{
      // aplicar filtro
      this.filtrarProductos( termino );
    }

  
  }
  
  private filtrarProductos(termino: string){

     //console.log(this.productos);
     this.productoFiltrado = [];

     termino = termino.toLocaleLowerCase();

     this.productos.forEach( prod => {

        const titulower = prod.titulo.toLocaleLowerCase();

          if( prod.categoria.indexOf( termino ) >= 0  || titulower.indexOf(  termino ) >= 0 ){
            this.productoFiltrado.push( prod );
          }
     });


    
  }

}
