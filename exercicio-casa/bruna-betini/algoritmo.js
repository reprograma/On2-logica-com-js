/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/


let notaUm = parseInt(prompt('Digite a nota do primeiro trimestre'));
let notaDois = parseInt(prompt('Digite a nota do segundo trimestre'));
let notaTres = parseInt(prompt('Digite a nota do terceiro trimestre'));
let mediaEscola = 7;

let calculoMedia = Math.floor(((notaUm + notaDois + notaTres) / 3));

if (calculoMedia >= mediaEscola) {
  alert(`Parabéns, você está aprovado, aproveite suas férias!`);
} else {
  alert(`Reprovados :(`);
  let recuperacao = confirm('Você gostaria de fazer aulas de recuperação?');

  if (recuperacao === true) {
    alert(`Ótimo, as aulas de recuperação começam semana que vem!`);
  } else {
    alert(`Que pena, te vejo ano que vem.`);
  }
}