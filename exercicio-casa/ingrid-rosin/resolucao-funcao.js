/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function aprova(nota1, nota2, nota3) {
    let media = Math.floor((nota1 + nota2 + nota3) / 3);
    if (media >= 7) {
        console.log("Parabéns, você está aprovado!");
    } else {
        console.log("Reprovado!");
    }
    return media;
}
let resultado = aprova(2, 6, 8)

//outra opção


function notaAnual(nota1, nota2, nota3) {
    return Math.floor((nota1 + nota2 + nota3) / 3);
}

let resultNotaAnual = notaAnual(5, 10, 7)

if (resultNotaAnual >= 7) {
    console.log("Aluno Aprovado")
}else if (resultNotaAnual >= 5 && resultNotaAnual < 7) {
    console.log("Aluno em recuperação");
}else {
    console.log("Aluno reprovado")
}

//parseInt e Math.floor = mostrar os numeros inteiros



/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/


function mesAno(numero) {
    switch (numero) {
        case 1 || '01':
            return 'Janeiro'
        case 2 || '02':
            return 'Fevereiro'
        case 3 || '03':
            return 'Março'
        case 4 || '04':
            return 'Abril'
        case 5 || '05':
            return 'Maio'
        case 6 || '06':
            return 'Junho'
        case 7 || '07':
            return 'Julho'
        case 8 || '08':
            return 'Agosto'
        case 9 || '09':
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
            return 'Mês inválido'
    }
}
let mesEscolhido = mesAno(10);
console.log(mesEscolhido);

