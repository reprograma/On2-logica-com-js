/*  
 1. Na porta de uma balada, confirme a seguintes informações:

    SE for maior e igual a 18  - ( Passe a mensagem ao usuario que "Maior que 18 - autorizado")
    Se for menor que 18 - ( Passe a mensagem ao usuario que "Menor que 18 - não autorizado")

*/

let idade = 15;

let condicao1 = (numero == 18);
console.log (condicao1);

let condicao2 = numero > 3;
console.log (condicao2);


/*  
 2. Em uma fila de cadastro, eu tenho 25 anos e atendente precisa  confirmar a seguintes informações:

    SE idade é menor igual a  18 -  ( Passe a mensagem ao usuario que "criança/adolescente")
    SE for maior que 18  E menor igual a 60 - ( Passe a mensagem ao ususrio que "Adulto")
    SE NÃO  ( Passe a mensagem ao ususrio que "Idoso")
*/

let idade = parseInt(prompt('Qual a sua idade?'));

if (idade <= 18) {
    alert(`criança/adolescente`);
} else if (idade <=60) {
    alert (`adulto`);
} else {
    alert (`idoso`);
}


/* 
    3. Calculo IMC

    Crie uma variavel receba  peso em kg, uma variavel que receba altura em metros. 
    Faça as comparações necessarias usando if e else if e els, para determinar qual a interpretação do IMC atual.

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

let pesoKg = parseInt(prompt('Qual o seu peso em kg?'));
let altura = parseInt(prompt('Qual a sua altura em metros?'));
let IMC = Math.floor(pesoKg/altura);


if (IMC <= 18,5) {
    alert(`abaixo do peso normal`);
} else if (18,5 < peso <= 25) {
    alert (`peso normal`);
} else if (25 < peso <= 30) {
    alert (`acima do peso`)
} else {
    alert (`obesidade`);
}
    

