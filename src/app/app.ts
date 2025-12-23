import { Component, signal } from '@angular/core';
import { InputUsuarios } from './input-usuarios/input-usuarios';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { ResultadosComponent } from './resultados/resultados';

@Component({
  selector: 'app-root',
  imports: [InputUsuarios, CabecalhoComponent, ResultadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investment-calculator');
}
