/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/

function media(n1, n2, n3) {

    let calculo =  ((n1 + n2 + n3) / 3).toFixed(2);

    if (calculo >= aprov){
       return alert("Sua média foi : "+calculo+  " Você passou!")}
     else {
        return alert(" Sua média foi : "+ calculo + "Reprovado.")} 
  }

  let aprov = parseFloat(window.prompt("Nota média para aprovação: "))
  let n1 = parseFloat(window.prompt("Nota do 1º Trimestre: "))
  let n2 = parseFloat(window.prompt("Nota do 2º Trimestre: "))
  let n3 = parseFloat(window.prompt("Nota do 3º Trimestre: "))

  media(n1, n2, n3) 







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

console.log(MesDoAno(03))