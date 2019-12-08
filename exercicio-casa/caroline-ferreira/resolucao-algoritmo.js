/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/

nota1=prompt("Informe a nota do primeiro bimestre:");
nota2=prompt("Informe a nota do segundo bimestre:");
nota3=prompt("Informe a nota do terceiro bimestre:");

let notamedia = (nota1 + nota2 + nota3) / 3
let media = 7


if (notamedia >= media) {alert("Parabéns, você está aprovado, aproveite suas férias!")
else {alert("Reprovados :(")}
    
}
let aulas = window.prompt (" Gostaria de realizar aulas de recuperação? 1 (SIM) / 0 (NÃ0)")
if (aulas = 1 ){alert("Ótimo, as aulas de recuperação começam semana que vem!")}
else {alert("Que pena, te vejo ano que vem.")}
} 