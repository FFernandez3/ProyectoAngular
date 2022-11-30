import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KdramaDataService } from '../kdrama-data.service';
import { Kdrama } from '../kdrama-list/Kdrama';

@Component({
  selector: 'app-agregar-kdrama',
  templateUrl: './agregar-kdrama.component.html',
  styleUrls: ['./agregar-kdrama.component.scss']
})
export class AgregarKdramaComponent implements OnInit {
  kdramas: Kdrama[] = [];

  constructor(private kdramasDataService: KdramaDataService) { }

  ngOnInit(): void {
    this.kdramasDataService.getAll()
      .subscribe(kdramas => this.kdramas = kdramas);
  }
  nuevoKdrama(kdrama: Kdrama) {
    this.kdramas.push(kdrama);
  }

  onKdramaCreate(kdrama: { titulo: string, genero: string, anio: number, capitulos: number, estaEnEmision: boolean, portada: string }) {
    //console.log(kdrama);
    this.kdramasDataService.add(kdrama);;


  }

}
