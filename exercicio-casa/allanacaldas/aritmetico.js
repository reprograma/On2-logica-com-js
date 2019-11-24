/*
Quanto sobra?
Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show de Beyonce. 
Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe que ele só tem notas de 5 reais. descubra:

a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)

Voltarei com três reais em moedas que é o resto da divisão, aquilo que não pode ser mais dividido por */

let EconomiasdoPorquinho = 798

let ValorDaCedula = 5

let TrocoemMoeda = EconomiasdoPorquinho%ValorDaCedula

console.log(TrocoemMoeda) 
3

/*b) Quantas notas você vai retornar para casa?

Voltarei com 159 notas de 5 reais, totalizando 795 reais*/

let Operacaodetroca = EconomiasdoPorquinho/ValorDaCedula

console.log(Math.trunc(Operacaodetroca))
159

/*c) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Alteríamos o valor recebido pela let ValorDaCedula para 10, o que acarretará mudanças no valor das outras operações*/

ValorDaCedula = 10

Operacaodetroca = EconomiasdoPorquinho/ValorDaCedula

console.log(Math.trunc(Operacaodetroca))
79

TrocoemMoeda = EconomiasdoPorquinho%ValorDaCedula

console.log(TrocoemMoeda)
8

/*Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.*/
