import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public ruta;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarProducto(producto: Producto): Observable<any>{
    let params = JSON.stringify(producto);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.post(this.ruta + 'agregarProducto', params, {headers: headersToken})
   }

   ordenarProductosAscendente(): Observable<any>{

      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

      return this._http.get(this.ruta + 'ordenarProductosAscendente', {headers: headersToken});
   }

   ordenarProductosDescendente(): Observable<any>{

      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

      return this._http.get(this.ruta + 'ordenarProductosDescendente', {headers: headersToken});
   }

   obtenerProductos(): Observable<any>{

      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

      return this._http.get(this.ruta + 'obtenerProductos', {headers: headersToken});
   }

   obtenerProductosID(id:String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerProductosID/' + id, {headers: headersToken});
   }

   venderProducto(vendido: Producto): Observable<any>{
    let params = JSON.stringify(vendido);

    return this._http.put(this.ruta + 'vender/' + vendido._id, params, {headers: this.headersVariable});

   }

   obtenerToken(){
    var token2 = localStorage.getItem('token');

    if(token2 != 'undefined'){
      this.token = token2;
    } else{
      this.token = null;
    }

    return this.token;
  }
}
