/* 
Quanto sobra? 

Imagine que você quebrou seu porquinho que tinha 798 reais para comprar o ingresso do show de Beyonce.
Agora você precisa trocar as moedas em um banco, mas chega no caixa e percebe que ele só tem notas de 5 reais.
descubra:
    
a) Qual o valor que você vai voltar em moedas? (use o operador resto da divisão)*/


/*b) Quantas notas você vai retornar para casa?*/


/*C) O que você precisaria ajustar no algoritmo caso o banco só tivesse notas de 10 reais?

Obs:
ParseInt é uma conversão para inteiros que joga fora a parte decimal  e existem muitas outros.*/

let porco = 798
undefined
> porquinho % 5
3
> porquinho / 5
159.6
>
> let cedula = 5
undefined
> result = porquinho % cedula
3
> resultado = porquinho / cedula
159.6
> let cedula = 10
Thrown:
SyntaxError: Identifier 'cedula' has already been declared
> valorNotas = 10
10
> resultado
159.6
> resultado = porquinho / cedula
79.8
>
> resultado = porquinho % cedula
8
>  