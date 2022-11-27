import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kdrama } from './kdrama-list/Kdrama';

@Injectable({
  providedIn: 'root'
})
export class ListaKdramasVistosService {

  private _listaVistos: Kdrama[] = [];
  listaVistos: BehaviorSubject<Kdrama[]> = new BehaviorSubject(this._listaVistos);
  constructor() { }

  agregarAVistos(kdrama: Kdrama) {
    let item = this._listaVistos.find((v1) => v1.titulo == kdrama.titulo);
    if (!item) { //si no esta lo agrego
      this._listaVistos.push({ ...kdrama }); //pusheo una copia
      //console.log(this.listaVistos.length);

    } else { //cuando lo encuentro, puedo cambiarle el puntaje
      item.puntaje = kdrama.puntaje;
    }
    console.log(this._listaVistos);
    this.listaVistos.next(this._listaVistos);

  }
}
