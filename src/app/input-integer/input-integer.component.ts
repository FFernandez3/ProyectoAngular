import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kdrama } from '../kdrama-list/Kdrama';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  /*esta bien declarar esto asi?? */
  private MAX=10;
  private MIN=0;

  @Input() puntaje!: number; /*le tuve que poner un ! para q funcione */
  @Output() puntajeChange: EventEmitter<number>=new EventEmitter<number>();

  @Output() maxReached:EventEmitter<string>=new EventEmitter<string>(); /*cuando se alcanza el max puntaje */

  ngOnInit(): void {
  }

  subirPuntaje(): void{
    if (this.puntaje<this.MAX){
      this.puntaje++;
      this.puntajeChange.emit(this.puntaje); /*emito el evento y le digo el nuevo valor que va a tomar */
    }
    else{
      this.maxReached.emit("Se alcanzo el puntaje maximo");
    }
   

  }
  bajarPuntaje(): void{
    if (this.puntaje>this.MIN){
      this.puntaje--;
      this.puntajeChange.emit(this.puntaje);
    }
      

  }
  cambiarPuntaje(event:KeyboardEvent): void{
    
    console.log(event);
    this.puntajeChange.emit(this.puntaje);
  }

}
