//vai ter uma lista de resultados
//vai calcular os investimentos e popular essa lista

import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class InvestimentoService{
    private resultados :number[]= []


    get getResultados(){
        return this.resultados
    }

    calcular(){
        this.resultados.push(1);
    }

}