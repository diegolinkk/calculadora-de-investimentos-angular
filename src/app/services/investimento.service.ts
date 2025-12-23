//vai ter uma lista de resultados
//vai calcular os investimentos e popular essa lista

import { Injectable } from "@angular/core";
import { inputInvestimento, retornoInvestimento } from "../models/investimento.model";

@Injectable({ providedIn: 'root' })
export class InvestimentoService {
  private resultados: retornoInvestimento[] = []


  get getResultados() {
    return this.resultados
  }

  calcular(input: inputInvestimento) {
    this.resultados = [] //zera lista anterior

    let investimentoInicial = input.investimentoInicial
    let aporteAnual = input.investimentoAnual
    let taxaDeJuros = input.retornoEsperado
    let duracaoEmAnos = input.duracao
    let anoAtual = new Date().getFullYear()

    let investimentoAno1: retornoInvestimento = {
      ano: 0, capitalInvestido: 0, jurosAnual: 0, jurosTotal: 0, valorInvestido: 0
    }

    //ano 1 tem um cálculo levemente diferente
    let ano = 1;
    investimentoAno1.ano = anoAtual + 1;
    investimentoAno1.capitalInvestido = investimentoInicial + aporteAnual
    investimentoAno1.jurosAnual = investimentoInicial * (taxaDeJuros / 100)
    investimentoAno1.jurosTotal = investimentoInicial * (taxaDeJuros / 100)
    investimentoAno1.valorInvestido = investimentoInicial + aporteAnual + investimentoInicial * (taxaDeJuros / 100)
    this.resultados.push(investimentoAno1)

    ano += 1
    while (ano <= duracaoEmAnos) {
      const investimentoAnoAnterior = { ... this.resultados[this.resultados.length - 1] }
      let capitalInvestido = investimentoAnoAnterior.capitalInvestido + aporteAnual
      let jurosAnual = investimentoAnoAnterior.valorInvestido * (taxaDeJuros / 100)
      let jurosTotal = investimentoAnoAnterior.jurosTotal + jurosAnual
      let valorInvestido = investimentoAnoAnterior.valorInvestido + jurosAnual + aporteAnual


      let investimentoAnoVigente: retornoInvestimento = {
        ano: anoAtual + ano,
        capitalInvestido: capitalInvestido,
        jurosAnual: jurosAnual,
        jurosTotal: jurosTotal,
        valorInvestido: valorInvestido
      }
      this.resultados.push(investimentoAnoVigente)
      ano += 1
    }

  }

}