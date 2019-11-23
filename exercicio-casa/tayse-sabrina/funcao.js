/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function mediaNota(nota1, nota2, nota3){
    return Math.floor((nota1 + nota2 + nota3) / 3 );
}

let resultFinal = mediaNota(6,10,8);

if (resultFinal>= 7){
    console.log("Aluno Aprovado");
}else{
    console.log("Aluno Reprovado");
}




/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/


function mesAno(num){

    switch (num){
        case 01:
            console.log("janeiro");
            break;

        case 02:
        console.log("fevereiro");
        break;

        case 03:
        console.log("março");
        break;

        case 04:
        console.log("abril");
        break;

        case 05:
        console.log("maio");
        break;

        case 06:
        console.log("junho");
        break;

        case 07:
        console.log("julho");
        break;

        case 08:
        console.log("agosto");
        break;

        case 09:
        console.log("setembro");
        break;

        case 10:
        console.log("outubro");
        break;

        case 11:
        console.log("novembro");
        break;

        case 12:
        console.log("dezembro");
        break;

        default: console.log("Não existe este mês");
    }

}

console.log(mesAno(10));