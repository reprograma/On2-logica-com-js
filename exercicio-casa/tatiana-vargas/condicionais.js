/*  
 1. Na porta de uma balada, confirme a seguintes informações:

    SE for maior e igual a 18  - ( Passe a mensagem ao usuario que "Maior que 18 - autorizado")
    Se for menor que 18 - ( Passe a mensagem ao usuario que "Menor que 18 - não autorizado")

*/

let idade = 15

if (idade >= 18){
    console.log('Maior que 18 - Autorizado')
}else if (idade < 18){
    console.log('Menor que 18 - Não Autorizado')
}
 Menor que 18 - Não Autorizado



idade = 21

if (idade >= 18){
    console.log('Maior que 18 - Autorizado')
}else if (idade < 18){
    console.log('Menor que 18 - Não Autorizado')
}
 Maior que 18 - Autorizado

/*  
 2. Em uma fila de cadastro, eu tenho 25 anos e atendente precisa  confirmar a seguintes informações:

    SE idade é menor igual a  18 -  ( Passe a mensagem ao usuario que "criança/adolescente")
    SE for maior que 18  E menor igual a 60 - ( Passe a mensagem ao ususrio que "Adulto")
    SE NÃO  ( Passe a mensagem ao ususrio que "Idoso")
*/

idade = 25

if(idade <= 18){
    console.log('Criança/Adolescente')
}else if(idade > 18 <= 60){
    console.log('Adulto')
}else{
    console.log('Idoso')
}
 Adulto


 idade = 10
 
 if(idade <= 18){
     console.log('Criança/Adolescente')
 }else if(idade > 18 && idade <= 60){
     console.log('Adulto')
 }else{
     console.log('Idoso')
 }
 Criança/Adolescente


idade = 63

if(idade <= 18){
     console.log('Criança/Adolescente')
 }else if(idade > 18 && idade <= 60){
     console.log('Adulto')
 }else{
     console.log('Idoso')
 }
Idoso

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

let peso = 80
let altura = 1.80
let IMC = peso / (altura*altura)

console.log(IMC)
24.691358024691358

if(IMC <= 18.5){
    console.log('Abaixo do peso normal')
}else if(IMC > 18.5 && IMC <= 25){
    console.log('Peso normal')
}else if(IMC > 25 && IMC <= 30){
    console.log('Acima do peso normal')
}else{
    console.log('Obesidade')
}
 Peso normal



peso = 90
altura = 1.65
IMC = peso / (altura*altura)

console.log(IMC)
33.057851239669425

if(IMC <= 18.5){
    console.log('Abaixo do peso normal')
}else if(IMC > 18.5 && IMC <= 25){
    console.log('Peso normal')
}else if(IMC > 25 && IMC <= 30){
    console.log('Acima do peso normal')
}else{
    console.log('Obesidade')
}
 Obesidade

