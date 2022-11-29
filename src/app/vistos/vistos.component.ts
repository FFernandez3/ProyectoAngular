import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KdramaDataService } from '../kdrama-data.service';
import { Kdrama } from '../kdrama-list/Kdrama';
import { ListaKdramasVistosService } from '../lista-kdramas-vistos.service';

@Component({
  selector: 'app-vistos',
  templateUrl: './vistos.component.html',
  styleUrls: ['./vistos.component.scss']
})
export class VistosComponent implements OnInit {

  listaVistos$: Observable<Kdrama[]>;
  constructor(private vistos: ListaKdramasVistosService) {
    this.listaVistos$ = vistos.listaVistos.asObservable();


  }

  ngOnInit(): void {
  }

}
