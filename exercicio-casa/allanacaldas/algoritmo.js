/* 
Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.
A média para passar de ano na escola é 7
O ano escolar tem 3 trimestres
Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!
Alunos reprovados devem ver a mensagem: Reprovados :(
Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
*/

let trimestres = 3

let SomaDasNotas = 15

let MediaAnual = SomaDasNotas/trimestres;

const MediaParaAprovacao = 7

let r = "Você quer assistir aulas de recuperação para tentar melhorar a nota e passar de ano?"

if (MediaAnual>=MediaParaAprovacao) {alert("Parabéns! Você está aprovado, aproveite suas férias. ")}
else {alert ('Reprovado!')}

if (MediaAnual<MediaParaAprovacao) {confirm("Você quer assistir aulas de recuperação para tentar melhorar a nota e passar de ano?")}

if (r = true) {alert("Ótimo, as aulas começarão semana que vem")}

