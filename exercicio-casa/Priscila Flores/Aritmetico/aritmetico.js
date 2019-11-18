/* 
Quanto sobra? 

Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show de Beyonce. Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe que ele só tem notas de 5 reais. descubra:
    
a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)
    
b) Quantas notas você vai retornar para casa?

C) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.

*/

let moedas = 798 % 5;
let notas = (798 - moedas) / 5;

alert('Valor que irá restar de moedas é:💰R$' + moedas + '  e o valor em notas é : 💵 R$' + notas + '. Se o banco tivesse apenas notas de R$10 teríamos que trocar o divisor de 5 por 10. (Deixei comentado no código)');

// Para notas de R$10
// let moedas = 798 % 10;
// let notas = (798 - moedas) / 10;
