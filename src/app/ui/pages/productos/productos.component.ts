import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { GlobalText } from '../../../data/text';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductosService } from '../../../data/services/productos/productos.service';
import { NgFor } from '@angular/common';
import { UrlNavigateService } from '../../../data/services/url-navigate.service';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './productos.component.html',
  styleUrl  : './productos.component.css'
})

export class ProductosComponent implements OnInit {
 

  arrayProductosByCategorias: any;
  idProducto: number | undefined; //Almaceno id y nombre
  nombreProducto: string | undefined; 


  constructor (
    public urlNavigateSerice: UrlNavigateService,
    public globalText: GlobalText,
    public router:Router,
    public serviceProduct: ProductosService
  ){


  }


ngOnInit(): void {
  // Obtengo id y el nombr
  this.idProducto = history.state.id; //Saco el id 
  this.nombreProducto = history.state.nombre; // Capturo el nombre

  // Verifica si el id está definido antes de llamar al servicio
  if (this.idProducto) {
    this.getProductById(this.idProducto);
  }
}

// Consultar el producto por ID
getProductById(id: number) {
  this.serviceProduct.getProductoById(id.toString()).subscribe(result => {
    this.arrayProductosByCategorias = [result]; // Convierte el objeto en un arreglo
  });
}

  
}
