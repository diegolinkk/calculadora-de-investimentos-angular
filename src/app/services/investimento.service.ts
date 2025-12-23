//vai ter uma lista de resultados
//vai calcular os investimentos e popular essa lista

import { Injectable } from "@angular/core";
import { inputInvestimento, retornoInvestimento } from "../models/investimento.model";

@Injectable({providedIn: 'root'})
export class InvestimentoService{
    private resultados :retornoInvestimento[]= []


    get getResultados(){
        return this.resultados
    }

    calcular(input : inputInvestimento) {
      this.resultados.length = 0
      let investmentValue = input.investimentoInicial;

      for (let i = 0; i < input.duracao; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (input.retornoEsperado / 100);
        investmentValue += interestEarnedInYear + input.investimentoAnual;
        const totalInterest =
          investmentValue - input.investimentoAnual * year - input.investimentoInicial;
        this.resultados.push({
          ano: year,
          capitalInvestido: investmentValue,
          valorInvestido: interestEarnedInYear,
          jurosAnual: input.investimentoAnual,
          jurosTotal: totalInterest,
          //capitalInvestido: input.investimentoInicial + input.investimentoAnual * year,
        });
      }
    }

}