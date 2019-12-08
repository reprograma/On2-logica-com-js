/* 
Quanto sobra? 

Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show de Beyonce. Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe que ele só tem notas de 5 reais. descubra:
    
a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)
    
b) Quantas notas você vai retornar para casa?

C) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.

*/
let retornoMoedas = 798%5 // 3
let retornoNotas = 798/5 // 159

moedas=parseInt(prompt("ingresse a quantidade de moedas:"));

if (moedas = 798) {
    console.log ("o retorno de moedas é = "+retornoMoedas);
} else { moedas != 798}  console.log("você não quebrou seu porquinho");

/*  se o banco só tivesse notas de 10 reais, o algoritmo deveria ter:
let retornoMoedas = 798%10 && let retornoNotas = 79
*/
