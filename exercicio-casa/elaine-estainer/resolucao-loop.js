/*
1.  Desenhe uma escada 5 andares, utilizando  um dos seguintes tipos de loop: for, do while ou while.
    Utilize a string para passar dentro um caractere, para desenhar a escada.

    Exemplo:
    '#'
    '##'
    '###'
    '####'
    '#####'

*/
let i
for(i=1; i<=5; i++){console.log("#".repeat(i))}
/*#
##
###
####
#####
/*

 2. Faça a taboada do 10 utilizando um dos seguintes loops for, while, ou do while.

    Exemplo:

    '1 x 10 = 10'
    '2 x 10 = 20'
    '3 x 10 = 30'
    '4 x 10 = 40'
    '5 x 10 = 50'
    '6 x 10 = 60'
    '7 x 10 = 70'
    '8 x 10 = 80'
    '9 x 10 = 90'
    '10 x 10 = 100'
*/

let contador = 1
let valor = 10
do {console.log(contador+"x10=" + (valor * contador));contador = contador+1;} while(contador<11);
/*1x10=10
2x10=20
3x10=30
4x10=40
5x10=50
6x10=60
7x10=70
8x10=80
9x10=90
10x10=100
*/
/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/
let diaSemana = "Quinta-feira"
switch(diaSemana){
    case "Segunda-feira": 
    console.log("Hoje é Segunda-feira");break; 
    case "Terça-feira": 
    console.log("Hoje é Terça-feira");break; 
    case "Quarta-feira": 
    console.log("Hoje é Quarta-feira");break; 
    case "Quinta-feira": 
    console.log("Hoje é Quinta-feira");break; 
    case "Sexta-feira": 
    console.log("Hoje é Sexta-feira");break;
    case "Sábado": 
    console.log("Hoje é Sábado");break; 
    case "Domingo": 
    console.log("Hoje é Domingo");break;
default:console.log("Não é um dia da semana")
}
//Hoje é Quinta-feira