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

for(let a = 1; a <= 5; a++){
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

for(let t = 1; t <= 10; t++){
    console.log(`${t} * 10 = ${t*10}`)
}

/* 
 3. Faça um SWITCH para achar o dia da semana quarta-feira, ressaltando que deve constar no seu código todos os dias da semana.

*/

let diaDaSemana = "quarta";

switch(diaDaSemana){
    case "segunda":
        console.log("segunda");
    break;
    case "terça":
        console.log("terça");
    break;
    case "quarta":
        console.log("quarta");
    break;
    case "quinta":
        console.log("quinta");
    break;
    case "sexta":
        console.log("sexta");
    break;
    case "sabado":
        console.log("sabado");
    break;
    default: console.log("invalido");
}
