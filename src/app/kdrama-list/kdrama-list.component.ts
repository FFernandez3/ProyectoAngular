import { Component, OnInit } from '@angular/core';
import { Kdrama } from './Kdrama';

@Component({
  selector: 'app-kdrama-list',
  templateUrl: './kdrama-list.component.html',
  styleUrls: ['./kdrama-list.component.scss']
})
export class KdramaListComponent implements OnInit {

  kdramas : Kdrama[]=[
    {
      titulo:"mr. Sunshine",
      genero: "Historico",
      capitulos: 24,
      anio:2018, 
      imagen:"assets/img/mrSunshine.webp",
      emision:false,
    },
    {
      titulo:"la flor del mal",
      genero: "Thriller",
      capitulos: 16,
      anio:2020, 
      imagen:"assets/img/laFlorDelMal.webp",
      emision:false,
    },
    {
      titulo:"alquimia de almas",
      genero: "Romance",
      capitulos: 20,
      anio:2022, 
      imagen:"assets/img/aterrizaje.webp",
      emision:true,
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
