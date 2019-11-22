/*  
   1. Crie as varias citadas abaixo, complentando com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO
*/

let nome = "cecilia";
let profissao = "designer";
let escolaridade = "superior completo";
let estado = "são paulo";
let cidade = "são paulo";

console.log(nome,profissao,escolaridade,estado,cidade);

// cecilia designer superior completo são paulo são paulo

console.log(`${nome} é uma ${profissao} que possui ${escolaridade}`);

// cecilia é uma designer que possui superior completo

/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 
*/

nome = "carla";
profissao = "doutora";
escolaridade = "phd";
cidade = "natal";
estado = "rio grande do norte";

console.log(nome, profissao, escolaridade,cidade,estado);

// carla doutora phd natal rio grande do norte

/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/

let A = 10;
let B = 20;
let C = A;

A = B;
B = C;

console.log(A,B);

// 20 10

/*  
    4. Escreva:

        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/

let A = 10;
let B = 20;

console.log(B);

// 20

B = 5;

console.log(A,B);

// 10 5

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

let A = 30;
let B = 20;
let C = A + B;

console.log(C);

// 50

B = 10;
C = A + B;

console.log(A,B,C);

// 30 10 40


/*  
    6. Escreva:

        variavel A = 10
        variavel B = 20
        variavel C = A 
        variavel B = C
        veriavel A = B
        Mostre A,B,C
*/

let A = 10;
let B = 20;
let C = A;
B = C;
A = B;

console.log(A,B,C);

// 10 10 10

/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/

const A = 100;
A = 80;

// Uncaught TypeError: Assignment to constant variable.

// Resposta: Não é possível alterar o valor de A por ser uma constante, não sendo permitido alterações durante a execução do programa.

/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?
*/

let valorMonetario = 80;
const taxaJuros = 1.03;
let valorFinal = valorMonetario * taxaJuros;

console.log(valorFinal);

// 82.4