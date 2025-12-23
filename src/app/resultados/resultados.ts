import { Component } from '@angular/core';
import { InvestimentoService } from '../services/investimento.service';

@Component({
  selector: 'app-resultados',
  imports: [],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css',
})
export class ResultadosComponent {
  constructor(private investimentoService :InvestimentoService ){}
  get listaDeInvestimentos(){
    return this.investimentoService.getResultados
  }
}
