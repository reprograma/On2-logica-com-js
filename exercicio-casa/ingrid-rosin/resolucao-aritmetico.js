/* 
Quanto sobra? 

Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show de Beyonce. Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe que ele só tem notas de 5 reais. descubra:
    
a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)
    
b) Quantas notas você vai retornar para casa?

C) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.

*/

let porquinho = 798;
let valorNota = 5

console.log(porquinho%5);
//a) 3 reais

console.log((porquinho-(porquinho%valorNota))/ valorNota);
//b) 159 notas

valorNota = 10
//c) Ajustar o valor da variável valorNota.