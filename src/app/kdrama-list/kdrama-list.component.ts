import { Component, OnInit } from '@angular/core';
import { catchError, max } from 'rxjs';
import { ListaKdramasVistosService } from '../lista-kdramas-vistos.service';
import { KdramaDataService } from '../kdrama-data.service';
import { Kdrama } from './Kdrama';

@Component({
  selector: 'app-kdrama-list',
  templateUrl: './kdrama-list.component.html',
  styleUrls: ['./kdrama-list.component.scss']
})
export class KdramaListComponent implements OnInit {

  kdramas: Kdrama[] = [];


  constructor(private listaVistos: ListaKdramasVistosService, private kdramasDataService: KdramaDataService) {

  }
  //se dispara cunado el componenete esta en pantalla
  ngOnInit(): void {
    this.kdramasDataService.getAll()
      .subscribe(kdramas => this.kdramas = kdramas);
  }
  agregarAVistos(kdrama: Kdrama): void {
    this.listaVistos.agregarAVistos(kdrama);
    kdrama.visto = true;
  }
  maxReached(m: string) {
    alert(m);
  }


}
