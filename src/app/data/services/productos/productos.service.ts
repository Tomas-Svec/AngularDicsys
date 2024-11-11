import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/*
export class ProductosService {
  constructor(private http: HttpClient) { }

  public getProductosByCategoria(id_categoria: string) {
    return this.http.get('http://127.0.0.1:3307/api/productos/1');
  }
}*/

export class ProductosService {
    private apiUrl = 'http://127.0.0.1:3307/api/productos'; // Base de la URL de la API

  constructor(private http: HttpClient) {}


  public getProductos(){
    return this.http.get('http://127.0.0.1:3307/api/productos');
  }

  public getProductoById(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}