/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function media(nota1, nota2, nota3) {
    return (nota1+nota2+nota3)/3;
}
function status(nota1, nota2, nota3) {
    if (media(nota1, nota2, nota3) > 6) {
        console.log("passou");
    } else {
        console.log("reprovou");
    }
}

/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/

function converte(mes) {
    switch (mes) {
        case "01":
            return "Janeiro";
        case "02":
            return "Fevereiro";
        case "03":
            return "Março";
        case "04":
            return "Abril";
        case "05":
            return "Maio";
        case "06":
            return "Junho";
        case "07":
            return "Julho";
        case "08":
            return "Agosto";
        case "09":
            return "Setembro"
        case "10":
            return "Outubro"
        case "11":
            return "Novembro"
        case "12":
            return "Dezembro"
        default:
            break;
    }        
}

console.log(converte("10"));