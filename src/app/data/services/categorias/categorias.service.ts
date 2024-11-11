import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(public http:HttpClient) { }

  public getCategorias(){
    return this.http.get('http://127.0.0.1:3307/api/categorias');
  }


}
