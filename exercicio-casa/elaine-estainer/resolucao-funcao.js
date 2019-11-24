/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/
function ano(nota1, nota2, nota3){return parseInt((nota1+nota2+nota3)/3);}
    let mediaFinal = ano(5, 3, 7)

if (mediaFinal >= 7) {
    console.log("Você está aprovado!")
} else if (mediaFinal >= 6 && mediaFinal < 7) {
    console.log("Você está de recuperação.");
} else {
    console.log("Você está reprovado.")
}
//Você está reprovado.


/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/
function mes(numero){
    
    switch(numero){case 01: console.log("Janeiro");break; case 02: console.log("Fevereiro");break; case 03: console.log("Março");break;case 04: console.log("Abril");break; case 05: console.log("Maio");break; case 06: console.log("Junho");break;case 07: console.log("Julho");break; case 08: console.log("Agosto");break; case 09: console.log("Setembro");break;case 10: console.log("Outubro");break;case 11: console.log("Novembro");break;case 12: console.log("Dezembro");break; default:console.log("Não é um mês.") }
    }
    let mesAno = 12
    console.log(mes(mesAno));
//Dezembro

