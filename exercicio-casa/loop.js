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
 1 * 10 = 10
 2 * 10 = 20
 3 * 10 = 30
 4 * 10 = 40
 5 * 10 = 50
 6 * 10 = 60
 7 * 10 = 70
 8 * 10 = 80
 9 * 10 = 90
 10 * 10 = 100

/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve constar no seu código todos os dias da semana.

*/

let diaDaSemana = 'quarta-feira';

switch(diaDaSemana){
    case 'segunda-feira':
        console.log('segunda-feira')
        break;
    case 'terça-feira':
        console.log('terça-feira')
        break;    
    case 'quarta-feira':
        console.log('quarta-feira')
        break;   
    case 'quinta-feira':
        console.log('quinta-feira')
        break;   
    case 'sexta-feira':
        console.log('sexta-feira')
        break;
    case 'sabado-feira':
        console.log('sabado-feira')
        break;
        default: console.log('Não é um dia da semana');            
        
        

}

quarta-feira