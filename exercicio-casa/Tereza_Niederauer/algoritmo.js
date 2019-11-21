/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. 
Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. 
Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/
let T1 = window.prompt("Insira a nota do 1º Trimestre: ");
let T2 = window.prompt("Insira a nota do 2º Trimestre: ");
let T3 =  window.prompt("Insira a nota do 3º Trimestre: ");

let soma = parseFloat(T1) + parseFloat(T2) + parseFloat(T3);
let total = (soma/3);
alert ("Sua média final foi:  " + total.toFixed(2))

    if (total >= 7) {
        alert("Parabéns, você está aprovado, aproveite suas férias!");
    }
    else {
        alert("Reprovado :(");
        let Resp = window.prompt (" Gostaria de realizar aulas de recuperação? 1 (SIM) / 0 (NÃ0)")
            if (Resp = 1 ){
                alert("Ótimo, as aulas de recuperação começam semana que vem!");
            }
            else {
                alert("Que pena, te vejo ano que vem.");
            }

     }