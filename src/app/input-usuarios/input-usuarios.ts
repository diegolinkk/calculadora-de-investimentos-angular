import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inputInvestimento } from '../models/investimento.model';

@Component({
  selector: 'app-inputs-usuario',
  imports: [FormsModule],
  templateUrl: './input-usuarios.html',
  styleUrl: './input-usuarios.css',
})
export class InputUsuarios {
  @Output() novosInputsUsuario = new EventEmitter;

  inputsUsuario: inputInvestimento = {
    investimentoInicial: 0,
    investimentoAnual: 0,
    retornoEsperado: 0,
    duracao: 0
  }

  calcular() {
    this.novosInputsUsuario.emit(this.inputsUsuario)
  }
}
