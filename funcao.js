/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

nota1 = parseInt(prompt("ingresse a nota 1"));
nota2 = parseInt(prompt("ingresse a nota 2"));
nota3 = parseInt(prompt("ingresse a nota 3"));

function notaAnual(nota1, nota2, nota3){
    return parseInt((nota1 + nota2 + nota3) / 3);
}

let resultfinal = notaAnual(nota1,nota2,nota3);

if (resultfinal >= 7){
    console.log("Aluno Aprovado");
}else if (resultfinal >= 5 && resultfinal < 7){
    console.log("Aluno em recuperação");
}else{
    console.log("Aluno reprovado");
}

/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/

numero = parseInt(prompt("mês do seu nascimento"));

function mesAno(numero) {

    switch (numero) {
        case 01:
            // return "Janeiro"
            console.log("Janeiro");
            break;
        case 02:
            console.log("Fevereiro");
            break;
        case 03:
            console.log("Março");
            break;
        case 04:
            console.log("Abril");
            break;
        case 05:
            console.log("Maio");
            break;
        case 06:
            console.log("Junho");
            break;
        case 07:
            console.log("Julho");
            break;
        case 08:
            console.log("Agosto");
            break;
        case 09:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Outubro");
            break;
        case 12:
            console.log("Outubro");
            break;
        default: console.log("Não é um mês");
    }

}


console.log(mesAno(numero))
