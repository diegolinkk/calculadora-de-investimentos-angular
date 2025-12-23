export type inputInvestimento = {
    investimentoInicial: number
    investimentoAnual: number
    retornoEsperado: number
    duracao: number
}

export type retornoInvestimento = {
    ano: number
    valorInvestido: number,
    jurosAnual: number,
    jurosTotal: number,
    capitalInvestido: number
}