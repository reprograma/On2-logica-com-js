/* 

Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não.

A média para passar de ano na escola é 7

O ano escolar tem 3 trimestres

Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado, aproveite suas férias!

Alunos reprovados devem ver a mensagem: Reprovados :(

Bônus: Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

*/

Algoritmo MediaAluno
var
nota1, nota2, nota3, media: Real

Inicio
Escreva("Digite a primeira nota: ")
Leia(nota1)
Escreva("Digite a segunda nota: ")
Leia(nota2)
Escreva("Digite a terceira nota: ")
Leia(nota3)
media = (nota1 + nota2 + nota3)/3;
Escreva ("A média do aluno é: ", media)
Se (media >=7) entao
Escreva("Parabéns, você está aprovado, aproveite suas férias! :)")
senao
Escreva("Reprovado :(")
FimSe

FimAlgoritmo