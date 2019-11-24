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

let andares = "#";

for(let i = 1; i <= 5; i++){
    console.log(andares)
    andares = andares + "#"
}

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

/* 
 3. Faça um SWITCH para achar o dia da semana quarta-feira, ressaltando que deve constar no seu código todos os dias da semana.

*/

let diaDaSemana = "quarta-feira";

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
        console.log("Segunda-Feira");
    break;
    case "sabado-feira":
        console.log("Sabado-Feira");
    break;
    default: console.log("Não é um dia da semana");
}
