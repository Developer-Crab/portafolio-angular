import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolior',
  templateUrl: './portafolior.component.html',
  styleUrls: ['./portafolior.component.scss']
})
export class PortafoliorComponent implements OnInit {

  constructor(public _productosService: ProductosService) { }

  ngOnInit(): void {
    
  }

}
