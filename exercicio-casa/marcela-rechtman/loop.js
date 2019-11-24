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

let andares = "#"
undefined
for(let i =1; i <= 5; i++){
console.log(andares) 
andares = andares + "#"
}
VM2157:2 #
VM2157:2 ##
VM2157:2 ###
VM2157:2 ####
VM2157:2 #####
"######
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
for(let B = 1; B <= 10; B++){ 
console.log(`${B} * 10 = ${B*10}`) 
}
VM954:2 1 * 10 = 10
VM954:2 2 * 10 = 20
VM954:2 3 * 10 = 30
VM954:2 4 * 10 = 40
VM954:2 5 * 10 = 50
VM954:2 6 * 10 = 60
VM954:2 7 * 10 = 70
VM954:2 8 * 10 = 80
VM954:2 9 * 10 = 90
VM954:2 10 * 10 = 100
undefined

/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/
let diaDaSemana = "quarta-feira";
undefined
switch(diaDaSemana){
    case "segunda-feira":
console.log("Segunda-Feira");
break;
    case "terça-feira":
console.log("Terça-Feira");
break;
    case "quarta-feira":
console.log("Quarta-Feira");
break;
    case "quinta-feira":
console.log("Quinta-Feira");
break;
    case "sexta-feira":
console.log("Sexta-Feira");
break;
    case "sabado-feira":
console.log("Sabado-Feira");
break;
    default: console.log("Não é um dia da semana");
}

VM1909:9 Quarta-Feira
undefined