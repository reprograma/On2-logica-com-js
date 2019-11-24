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

let andar = '$';
while(andar != '$$$$$$') {
  console.log(andar)
  andar = andar + '$'
}

//outra opçãp

let andares ='$'
for (i=1; i<=5; i++){
    console.log(andares);
    andares = andares + '$'
}

//obs.: i = uma variável qualquer (pode usar outra varável no lugar)

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

for(let i = 1; i <= 10; i++){
    console.log(`${i} * 10 = ${i*10}`)
}

//outra opção

let valor = 10 
for(var i = 1; i <11; i++){
    console.log(i + "x" + valor + "=" + (i*valor))
} 



/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/

let diaDaSemana = 'quarta-feira';

switch(diaDaSemana){
    case'segunda-feira':
        console.log('Segunda-Feira')
    break;
    case'terça-feira':
        console.log('Terça-Feira')
    break;
    case'quarta-feira':
        console.log('Quarta-Feira')
    break;
    case'quinta-feira':
        console.log('Quinta-Feira')
    break;
    case'sexta-feira':
        console.log('Sexta-Feira')
    break;
    case'sábado-feira':
        console.log('Sábado')
    break;
    case'domingo-feira':
        console.log('Domingo')
    break;
    default: console.log('Não é um dia da semana.')
}