import { Component, input, signal } from '@angular/core';
import { InputUsuarios } from './input-usuarios/input-usuarios';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { ResultadosComponent } from './resultados/resultados';
import { inputInvestimento } from './models/investimento.model';
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
  calcularInvestimento(inputsInvestimento : inputInvestimento){
    this.investimentoService.calcular(inputsInvestimento)
    console.log(this.investimentoService.getResultados)
  }
}
