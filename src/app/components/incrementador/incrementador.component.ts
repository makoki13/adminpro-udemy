import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() porcentaje = 50;

  constructor() { }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
  }

  cambiarValor(valor: number) {
    if ( (this.porcentaje >= 100) && (valor > 0) ) {return; }
    if ( (this.porcentaje <= 0) && (valor < 0) ) {return; }
    this.porcentaje += valor;
  }

}
