import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './input-usuarios.html',
  styleUrl: './input-usuarios.css',
})
export class InputUsuarios {
  investimentoInicial: number = 0
  investimentoAnual: number = 0
  retornoEsperado: number = 0
  duracao: number = 0

  calcular() {
    console.log(this.investimentoInicial, this.investimentoAnual, this.retornoEsperado, this.duracao)
  }
}
