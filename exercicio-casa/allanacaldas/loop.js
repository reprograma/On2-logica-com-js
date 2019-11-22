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
let degrau = "#";
for (i=0 ; i <5; i++) {console.log (degrau = degrau + "#")}
##
###
####
#####
######



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
let valor = 10
for(var i = 1; i <11; i++){console.log(i + "x" + valor + "=" + (i*valor))}
1x10=10
2x10=20
3x10=30
4x10=40
5x10=50
6x10=60
7x10=70
8x10=80
9x10=90
10x10=100


/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.
*/

let dia = "4"

switch (dia) {
case '1':
    console.log('Domingo');
    break;
  case '2': 
console.log('Segunda-feira');
    break;
case '3': 
console.log('Terça-feira');
    break;
case '4': 
console.log('Quarta-feira');
    break;
case '5': 
console.log('Quinta-feira');
    break;
case '6': 
console.log('Sexta-feira');
    break;
case '7': 
console.log('Sábado');
    break;
default:
    console.log('O dia solicitado não foi encontrado');
}
Quarta-feira