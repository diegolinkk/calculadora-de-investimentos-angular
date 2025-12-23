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

    let retornoAnual: retornoInvestimento = {
      ano: 0, capitalInvestido: 0, jurosAnual: 0, jurosTotal: 0, valorInvestido: 0
    }

    //ano 1 tem um cálculo levemente diferente
    let ano = 1;
    retornoAnual.ano = anoAtual + 1;
    retornoAnual.capitalInvestido = investimentoInicial + aporteAnual
    retornoAnual.jurosAnual = investimentoInicial * (taxaDeJuros / 100)
    retornoAnual.jurosTotal = investimentoInicial * (taxaDeJuros / 100)
    retornoAnual.valorInvestido = investimentoInicial + aporteAnual + investimentoInicial * (taxaDeJuros / 100)
    this.resultados.push(retornoAnual)

    ano += 1
    while (ano <= duracaoEmAnos) {
      const anoAnterior = { ... this.resultados[this.resultados.length - 1] }
      let capitalInvestido = anoAnterior.capitalInvestido + aporteAnual
      let jurosAnual = anoAnterior.valorInvestido * (taxaDeJuros / 100)
      let jurosTotal = anoAnterior.jurosTotal + jurosAnual
      let valorInvestido = anoAnterior.valorInvestido + jurosAnual + aporteAnual


      let anoVigente: retornoInvestimento = {
        ano: anoAtual + ano,
        capitalInvestido: capitalInvestido,
        jurosAnual: jurosAnual,
        jurosTotal: jurosTotal,
        valorInvestido: valorInvestido
      }
      this.resultados.push(anoVigente)
      ano += 1
    }

  }

}