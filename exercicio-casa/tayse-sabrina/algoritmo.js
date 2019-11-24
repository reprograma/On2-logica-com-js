/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/

let nota1 = 8;
let nota2 = 6;
let nota3 = 5;

let mediaAluno = ((nota1 + nota2 + nota3) / 3);

let media = 7;

let cond = "Você quer assistir aulas de recuperação para tentar melhorar a nota de passar de ano?"

if(mediaAluno >=7){
    console.log("Parabéns, você está aprovado, aproveite suas férias!");
}else{
    console.log("Reprovado :( ");
}
if(MediaAluno < media){
    confirm("Você quer assistir aulas de recuperação para tentar melhorar a nota de passar de ano?");
    if(cond = true){
        alert("Otimo, as aulas começarão semana que vem.");
    }else{
        alert("Que pena, te vejo ano que vem.");
    }

}

