/*  
 1. Na porta de uma balada, confirme a seguintes informações:

    SE for maior e igual a 18  - ( Passe a mensagem ao usuario que "Maior que 18 - autorizado")
    Se for menor que 18 - ( Passe a mensagem ao usuario que "Menor que 18 - não autorizado")

*/ 
    idade = (prompt("ingresse a idade:"));

   if (idade >= 18) {
       console.log ("Maior que 18 - autorizado");
   } else { idade < 18} 
        console.log ("Menor que 18 - não autorizado");


/*  
 2. Em uma fila de cadastro, eu tenho 25 anos e atendente precisa  confirmar a seguintes informações:

    SE idade é menor igual a  18 -  ( Passe a mensagem ao usuario que "criança/adolescente")
    SE for maior que 18  E menor igual a 60 - ( Passe a mensagem ao ususrio que "Adulto")
    SE NÃO  ( Passe a mensagem ao ususrio que "Idoso")
*/

let idade = 25

if (idade < 18){
    document.write("criança/adolescente");
} else {
    if (idade >= 18 && idade <=60 ) {
        document.write("adulto");
    } else {
        if (idade > 60) {
            document.write("idoso");
        } 
    }
}


/* 
    3. Calculo IMC

    Crie uma variavel receba  peso em kg, uma variavel que receba altura em metros. 
    Faça as comparações necessarias usando if e else if e else, para determinar qual a interpretação do IMC atual.

    IMC  / Interpretação

    Até 18,5 (inclusive)  / Abaixo do peso normal

    De 18,5 a 25 (inclusive) / Peso normal

    De 25 a 30 (inclusive) / Acima do peso normal

    Acima de 30 / Obesidade

    Exemplo:
    Peso = 85 
    Altura = 1.80
    Resultado = Acima do peso normal 

*/

let altura = 1.72
let peso = 65

let quadrado = (altura * altura);

let calculo = Math.floor(peso/quadrado);

if(calculo<18.5){
    console.log("Você está magro com esse indice: " + calculo);
}
else if(calculo>=18.5 && calculo<24.9){
    console.log("Você está normal com esse indice: " + calculo);
}

else if(calculo>=25 && calculo<29.9) {
    console.log("Você está com sobre peso com esse indice: " + calculo);
}
else if(calculo>=30 && calculo<39.9) {
    console.log("Você está com obesidade com esse indice: " + calculo);
}
else{
    console.log("Você estácom obesidade grave com esse indice: " + calculo);
}