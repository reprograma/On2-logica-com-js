/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/

let nome = 'Ingrid';
let profissao = 'Administradora';
let escolaridade = 'ensino médio completo';
let estado = 'São Paulo';
let cidade = 'Santo André';

console.log(nome, profissao, escolaridade, estado, cidade);

/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/

nome = 'Joao';
profissao = 'estudante';
escolaridade = 'Fundamental I incompleto';
estado = 'Rio de Janeiro';
cidade = 'Penedo';

console.log(nome, profissao, escolaridade, estado, cidade);


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
B = 5;
console.log(A,B);

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
let C = A+B;
console.log(C);
B=10;
C=A+B;
console.log(A,B,C);

/*  
    6. Escreva:

        variavel A = 10
        variavel B = 20
        variavel C = A 
        variavel B = C
        veriavel A = B
        Mostre A,B,C
*/

let A = 30;
let B = 20;
let C = A;
B=C;
A=B;
console.log(A,B,C);

/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/

const A = 100;
A=80; //TypeError: Assignment to constant variable.
//Constantes não podem ser alteradas, pois como já diz o nome, são constantes.


/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?
*/

//Variável - Valor monetário
//Constante - Taxa de juros
//Console - Valor com a taxa aplicada