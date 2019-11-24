/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/
function notaAnual(nota1, nota2, nota3){
    return parseInt((nota1 + nota2 + nota3) / 3);
}

let resultfinal = notaAnual(5,10,7);

if (resultfinal >= 7){
    console.log("Aluno Aprovado");
}else if (resultfinal >= 5 && resultfinal < 7){
    console.log("Aluno em Recuperação");
}else{
    console.log("Aluno Reprovado")
}

/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/



