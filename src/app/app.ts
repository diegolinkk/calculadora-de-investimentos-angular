import { Component, signal } from '@angular/core';
import { InputUsuarios } from './input-usuarios/input-usuarios';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { ResultadosComponent } from './resultados/resultados';
import { inputINvestimento } from './models/investimento.model';
import { InvestimentoService } from './services/investimento.service';

@Component({
  selector: 'app-root',
  imports: [InputUsuarios, CabecalhoComponent, ResultadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private investimentoService: InvestimentoService){}

  protected readonly title = signal('investment-calculator');
  calcularInvestimento(inputsInvestimento : inputINvestimento){
    this.investimentoService.calcular()
    console.log(this.investimentoService.getResultados)
  }
}
