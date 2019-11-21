/*
1.  Desenhe uma escada 5 andares, utilizando  um dos seguintes tipos de loop: 
    for, do while ou while.
    Utilize a string para passar dentro um caractere, para desenhar a escada.

    Exemplo:
    "#"
    "##"
    "###"
    "####"
    "#####"

*/
let degrau = "#";
let andar = 0;

do {

    console.log(degrau.repeat(andar));
    andar ++
}
    while(andar < 5)
/*
 2. Faça a taboada do 10 utilizando um dos seguintes loops for, while, ou do while.

    Exemplo:

    "1 x 10 = 10"
    "2 x 10 = 20"
    "3 x 10 = 30"
    "4 x 10 = 40"
    "5 x 10 = 50"
    "6 x 10 = 60"
    "7 x 10 = 70"
    "8 x 10 = 80"
    "9 x 10 = 90"
    "10 x 10 = 100"
*/

let contador = 1;

while (contador <= 10) {
    console.log( "10" + "x" + contador + "=" + (10 * contador) + "");
    contador++;
}
/* 
 3. Faça um SWITCH para achar o dia da semana quirta-feira, resaltando que deve 
    constar no seu código todos os dias da semana.

*/

function conversor(diaS) {

 let dia= "";
    switch (diaS) {

        case 1:
            dia = alert("Legal ! Seu dia escolhido é: Domingo");
            break;
        case 2:
            dia = alert("Legal ! Seu dia escolhido é: Segunda");
            break;
        case 3:
            dia = alert("Legal ! Seu dia escolhido é: Terça");
            break;
        case 4:
            dia = alert("Legal ! Seu dia escolhido é: Quarta");
            break;
        case 5:
            dia = alert("Legal ! Seu dia escolhido é: Quinta");
            break;
        case 6:
            dia = alert("Legal ! Seu dia escolhido é: Sexta");
            break;
        case 7:
            dia = alert("Legal ! Seu dia escolhido é: Sabado");
            break;
        default:
            alert ("Opa! isso ae nao é um dia válido, escolha um número entre 1 e 7") ;
    }
    return dia;
}
let escolha = parseInt(window.prompt("Escolha um número entre 1 e 7: "));
conversor(escolha); 