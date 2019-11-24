/* 
Quanto sobra? 

Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show 
de Beyonce. Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe
 que ele só tem notas de 5 reais. descubra:
    
a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)
    
b) Quantas notas você vai retornar para casa?

C) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.

*/

let porco = 798; /* Valor do Porquinho */
let banco = 5; /* Tipo de nota disponível (1/5/10/20/50/100)  */
let transacao = porco / banco; /* Transação total*/
let notas = parseInt(transacao);/* Apenas as notas */
let moedas = (transacao - notas).toFixed(2);/*Apenas as medas */

/* Retorna: 
    Transação: 159.6
    notas:159
    moedas: 0.60 
*/


