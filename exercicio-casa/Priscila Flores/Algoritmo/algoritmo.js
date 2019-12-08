/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/
let n1 =  parseInt(prompt('Qual sua nota no primeiro trimestre?'));
let n2 =  parseInt(prompt('Qual sua nota no segundo trimestre?'));
let n3 =  parseInt(prompt('Qual sua nota no terceiro trimestre?'));

let calculo = (n1 + n2 + n3) / 3;

if (calculo >= 7) {
    alert('Parabéns, você está aprovado, aproveite suas férias!');
}
else {
    alert('Reprovados :(');
}
