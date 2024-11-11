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
  nombreProducto: string | undefined;


  constructor (
    public urlNavigateSerice: UrlNavigateService,
    public globalText: GlobalText,
    public router:Router,
    public serviceProduct: ProductosService
  ){

 
    this.serviceProduct.getProductoById('2').subscribe(result => {
      this.arrayProductosByCategorias = [result]; // Convierte el objeto en un arreglo
    });
    

  }
  
  ngOnInit(): void {
    this.nombreProducto = history.state.nombre;
    console.log(this.nombreProducto);    
  }
  
}
