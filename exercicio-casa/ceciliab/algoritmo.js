/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/

function notaAnual(nota1, nota2, nota3){
    return Math.floor((nota1 + nota2 + nota3) / 3);
}

if (resultfinal >= 7){
    console.log("Parabéns, você está aprovado, aproveite suas férias!");
}else{
    console.log("Reprovado");
}

let resultfinal = notaAnual(5,10,7);

if (respostaSim){
    console.log("Ótimo, as aulas de recuperação começam semana que vem!");
}else{
    console.log("Que pena, te vejo ano que vem.");
}