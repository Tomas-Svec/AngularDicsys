import { UrlNavigateService } from '../../../data/services/url-navigate.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from "../../components/slider/slider.component";
import { Globalurl } from '../../../data/url';
import { GlobalText } from '../../../data/text';
import { FooterComponent } from "../../components/footer/footer.component";
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categorias/categorias.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent, SliderComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  arrayCategorias: any;
  errorMessage: string = ''; 

  constructor (
    public urlNavigateSerice: UrlNavigateService, 
    public globalText: GlobalText,
    public globalurl: Globalurl,
    public categoriasService: CategoriasService
   ){

    this.categoriasService.getCategorias().subscribe((result) =>{
      this.arrayCategorias = result;
    },
    (error) =>{
      this.errorMessage = 'No se pudo cargar las categorías. Intenta nuevamente más tarde.'; // Si hay un error en la API
        console.error('Error al obtener las categorías:', error); 
    }
  );
    
    }
  

    navigateToProductById(id: number, nombre: string) {
      this.urlNavigateSerice.navigateToUrlWithData(this.globalurl.products, {
        state: { id: id, nombre: nombre} // Envio el id y el nombre
        });
}
    
}


/*
  //FUERA DEL CONSTRUCTOR
  navigateToUrlWithData(){
    this.urlNavigateSerice.navigateToUrlWithData(this.globalurl.products, {
      state: { arrayCategorias: this.arrayCategorias }
    });
*/