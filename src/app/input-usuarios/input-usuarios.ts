import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './input-usuarios.html',
  styleUrl: './input-usuarios.css',
})
export class InputUsuarios {
  calcular() {
    console.log("Funcionou")
  }
}
