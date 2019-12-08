/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function calculaMediaEValidaNota(n1, n2, n3) {

    let calculo = (n1 + n2 + n3) / 3;
    let arredondar = calculo.toFixed(2)

    if (arredondar >= 7) {
        return (alert('Sua média foi: ' + arredondar + ' Parabéns, você está aprovado, aproveite suas férias!'));
    }
    else {
        return (alert('Sua média foi: ' + arredondar + ' Reprovados :('));
    }
}

let n1 = parseInt(prompt('Qual sua nota no primeiro trimestre?'));
let n2 = parseInt(prompt('Qual sua nota no segundo trimestre?'));
let n3 = parseInt(prompt('Qual sua nota no terceiro trimestre?'));
calculaMediaEValidaNota(n1, n2, n3);

/*
    2.  Crie uma função que converta o número do mês do ano pelo seu nome.
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/
function conversorMesPorNome(mes) {
    
    nomeMes = '';
    switch (mes) {
        case 1:
            nomeMes = 'Janeiro'
            break;

        case 2:
            nomeMes = 'Fevereiro';
            break;

        case 3:
            nomeMes = 'Março';
            break;

        case 4:
            nomeMes = 'Abril';
            break;

        case 5:
            nomeMes = 'Maio';
            break;

        case 6:
            nomeMes = 'Junho';
            break;

        case 7:
            nomeMes = 'Julho';
            break;

        case 8:
            nomeMes = 'Agosto';
            break;

        case 9:
            nomeMes = 'Setembro';
            break;

        case 10:
            nomeMes = 'Outubro';
            break;

        case 11:
            nomeMes = 'Novembro';
            break;

        case 10:
            nomeMes = 'Dezembro';
            break;

        default:
            nomeMes = 'Número inválido'
    }
    return alert(nomeMes);
}
let mesDigitado = parseInt(prompt('Digite um número correspondente a um mês:'));
conversorMesPorNome(mesDigitado);