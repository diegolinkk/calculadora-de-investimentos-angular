import { Component } from '@angular/core';
import { InvestimentoService } from '../services/investimento.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resultados',
  imports: [CurrencyPipe],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class ResultadosComponent {
  constructor(private investimentoService: InvestimentoService) { }
  get listaDeInvestimentos() {
    return this.investimentoService.getResultados
  }
}
