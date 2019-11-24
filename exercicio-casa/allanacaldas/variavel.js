/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade
    Dica: let IDENTIFICADOR = ATRIBUTO
*/
let nome = "Allana Caldas"

let profissao = "Administradora"

let escolaridade = "Nível Superior"

let estado = "Pernambuco"

let cidade = "Olinda"

console.log (nome, profissao, escolaridade, estado, cidade)
Allana Caldas Administradora Nível Superior Pernambuco Olinda

/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.
        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 
*/
nome = "Nathália Caldas"
"Nathália Caldas"
profissao = "psicóloga"
"psicóloga"
escolaridade = "Mestrado"
"Mestrado"
estado = "Paraíba"
"Paraíba"
cidade = "João Pessoa"
"João Pessoa"

/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20
    Troque o valor de A para B e valor de B para A.
*/
let A = 10

let B = 20

A =20
20
B = 10
10

/*  
    4. Escreva:
        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/
A = 10
10
B = 20
20
console.log (B) 
 20

B = 5
5
console.log (A, B) 
 10 5


/*  
    5. Escreva:
        variavel A = 30
        variavel B = 20
        variavel C = A + B
        Mostre C
        variavel B = 10
        veriavel C = A + B
        Mostre A,B,C
*/
A = 30
30
B = 20
20
let C = A + B

console.log (C) 
50

B = 10
10
C = A+B
40
console.log (A, B, C)
30 10 40


/*  
    6. Escreva:
        variavel A = 10
        variavel B = 20
        variavel C = A 
        variavel B = C
        veriavel A = B
        Mostre A,B,C
*/
A = 10
10
B =20
20
C = A
10
B = C
10
A = B
10
console.log (A,B,C) 
10 10 10


/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.
    Responda:
    Essa operação funcionou ? justifique
*/
const Y = 100

Y = 80
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(anonymous) 

/* Justificativa: A operação não funcionou, porque uma constante tem um valor fixo, ou seja, não permite alteração posterior. Se tivéssemos usado "let", poderíamos ter feito as alterações que desejássemos.


/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?

*/

let valormonetario = 1000

const taxadejuros = 0.3

let juros = valormonetario*taxadejuros

let montante = valormonetario+juros

montante
1300
console.log (valormonetario,taxadejuros, juros, montante)
 1000 0.3 300 1300


/* Usamos let pra estabelecer valores que podem ser alterados conforme desejado como "valormonetario", "juros" e "montante". Por outro lado, usamos const para valores que devem permanecer invariáveis (como é o caso da taxadejuros).
Por fim, console.log foi usado pra mostrar todos os valores que foram recebidos pelas variáveis e pela constante.