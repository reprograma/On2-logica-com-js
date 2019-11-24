/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/
function notaAnual(nota1, nota2, nota3){
    return parseInt((nota1 + nota2 + nota3)/3);
}

let resultFinal = notaAnual (5,10,7);

if (resultFinal >= 7){
    console.log("Aluno aprovado");
}else if (resultFinal >= 5 && resultFinal < 7){
    console.log("Alino em recupercação");
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



