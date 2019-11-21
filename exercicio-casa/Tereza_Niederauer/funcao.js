/* 
    1.  Crie uma função que receba três notas como parâmetro e retorne a média, indicando 
        se a pessoa passou ou se foi reprovada;

        Dica:
        Nesse exercicio você vai usar a function e if e else juntos.
*/
function media(T1, T2, T3) {

    let calculo =  ((T1 + T2 + T3) / 3).toFixed(2);

    if (calculo >= aprov){
       return alert("Sua média foi : "+calculo+  " Boas férias");
    }
     else {
        return alert(" Sua média foi : "+ calculo + "Uma pena :( mas você foi reprovado");
     } 
  }

  let aprov = parseFloat(window.prompt("Insira media para aprovação: "));
  let T1 = parseFloat(window.prompt("Insira a nota do 1º Trimestre: "));
  let T2 = parseFloat(window.prompt("Insira a nota do 2º Trimestre: "));
  let T3 = parseFloat(window.prompt("Insira a nota do 3º Trimestre: "));
 
  media(T1, T2, T3); 


/* 
    2.  Crie uma função que converta o número do mês do ano pelo seu nome. 
        Por exemplo:
        Digite 07
        retorne: Julho

        Dica:
        Nesse exercicio você vai usar a function e switch juntos.
*/

function conversor(mes) {

    nMes = ''
    switch (mes){
        case 1:
            nMes = 'Janeiro'
        break;
        
        case 2:
            nMes = 'Fevereiro'
        break;

        case 3:
            nMes = 'Março'
        break;

        case 4:
            nMes = 'Abril'
        break;

        case 5: 
            nMes = "Maio"
        break;

        case 6:
            nMes = "Junho"
        break;

        case 7: 
            nMes= 'Julho'
        break;

        case 8:
            nMes = 'Agosto'
        break;

        case 9:
            nMes ='Setembro'
        break;

        case 10:
            nMes = 'Outubro'
        break;

        case 11:
            nMes = 'Novembro'
        break;

        case 12:
            nMes = 'Dezembro'
        break;

        default:
            alert("Opa! Isso ae não é um mês...")
    }
    return alert(nMes);
} 
  let T1 = parseInt(window.prompt("Insira nº do mês: "));
 
  conversor(T1);