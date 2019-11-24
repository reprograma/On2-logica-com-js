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

function escada(degraus) {
    for (let i = 0; i < degraus; i++) {
        console.log("#".repeat(i + 1));
    }
}
escada(5);


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

// Tabuada com for
let numero = parseInt(prompt('Digite um número para calcular sua tabuada'));
for (let i = 0; i < 11; i++) {
    let resultado = numero * i;
    console.log(numero + 'x' + i + '=' + resultado);
}

// Tabuada com while
let numero = parseInt(prompt('Digite um número para calcular sua tabuada'));
let multiplicador = 1;
while (multiplicador <= 10) {
    console.log(numero + "*" + multiplicador + "=" + (numero * multiplicador) + "");
    multiplicador++;
}

/*
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/


function conversorNumeroPorNome(quinta) {
    
    let diaSemana = '';
    switch (quinta) {

        case 0:
            diaSemana = 'Domingo';
            break;
        case 1:
            diaSemana = 'Segunda';
            break;
        case 2:
            diaSemana = 'Terça';
            break;
        case 3:
            diaSemana = 'Quarta';
            break;
        case 4:
            diaSemana = 'Quinta';
            break;
        case 5:
            diaSemana = 'Sexta';
            break;
        case 6:
            diaSemana = 'Sabado';
            break;
        default:
            diaSemana = 'Dia inválido';
    }
    return diaSemana;
}
let quinta = 4;
conversorNumeroPorNome(quinta);