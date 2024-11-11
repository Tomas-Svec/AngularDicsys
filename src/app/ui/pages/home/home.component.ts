import { UrlNavigateService } from '../../../data/services/url-navigate.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from "../../components/slider/slider.component";
import { Globalurl } from '../../../data/url';
import { GlobalText } from '../../../data/text';
import { FooterComponent } from "../../components/footer/footer.component";
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categorias/categorias.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  arrayCategorias: any;

  constructor (
    public urlNavigateSerice: UrlNavigateService, 
    public globalText: GlobalText,
    public globalurl: Globalurl,
    public categoriasService: CategoriasService
   ){

    this.categoriasService.getCategorias().subscribe((result) =>{
      this.arrayCategorias = result;
    })
    
    }

    navigateToUrlWithData(index: number) {
      // Selecciona el nombre basado en el índice que el usuario elige
      const nombre = this.arrayCategorias[index]?.nombre;
    
      // Envía solo este nombre a la otra página
      this.urlNavigateSerice.navigateToUrlWithData(this.globalurl.products, {
        state: { nombre: nombre }
      });

      console.log(nombre);
      
    }



  
  
    
}


/*
  //FUERA DEL CONSTRUCTOR
  navigateToUrlWithData(){
    this.urlNavigateSerice.navigateToUrlWithData(this.globalurl.products, {
      state: { arrayCategorias: this.arrayCategorias }
    });
*/