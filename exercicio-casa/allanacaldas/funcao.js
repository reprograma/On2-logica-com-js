/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;
        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function NotaAnual(num1, num2, num3){
    return ((num1 + num2 + num3) / 3);
}

let resultfinal = NotaAnual(3,2,7);

if (resultfinal >= 7){
    console.log("Aluno Aprovado");
}else if (resultfinal >= 5 && resultfinal < 7){
    console.log("Aluno em recuperação");
}else{
    console.log("Aluno reprovado");
}

Aluno reprovado

console.log (resultfinal)
4


/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho
        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/

function MesDoAno(numerodomes) {

    switch (numerodomes) {
        case 01:
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
        default: console.log("Não é um mês");
    }

}


console.log(MesDoAno(08))