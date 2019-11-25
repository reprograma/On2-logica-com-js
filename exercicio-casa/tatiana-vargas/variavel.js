/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/

/*RESOLUÇÃO 1*/

let nome = 'Tatiana';
let profissao = 'buscando recolocação';
let escolaridade = 'superior completo'; 
let estado = 'Rio de Janeiro'; 
let cidade = 'Rio de Janeiro';

console.log(nome, profissao, escolaridade, estado, cidade)
 Tatiana buscando recolocação superior completo Rio de Janeiro Rio de Janeiro

/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/

/*RESOLUÇÃO 2*/

nome = 'Camila';
profissao = 'analista';
escolaridade = 'pós graduação';
estado = 'São Paulo';
cidade = 'Guarulhos'; 

console.log(nome, profissao, escolaridade, estado, cidade)
Camila analista pós graduação São Paulo Guarulhos

/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/
/*RESOLUÇÃO 3*/

let A = 10;
let B = 20;
let C = A;
A = B;
B = C;
console.log(A,B)
20 10


/*  
    4. Escreva:

        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/
/*RESOLUÇÃO 4*/

let A = 10;

let B = 20;

console.log(B=5)
5
console.log(A, B)
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
/*RESOLUÇÃO 5*/

let A = 30;
let B = 20;
let C = A + B; 
console.log(C);
50

B = 10;
C = A + B;
console.log(A, B, C)
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
/*RESOLUÇÃO 6*/

let A = 10;
let B = 20;
let C = A;
10
B = C; 
10
A = B; 
10
console.log(A, B, C);
10 10 10

/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/
/*RESOLUÇÃO 7*/

const A = 100
A = 80
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3

   A operação não funciona pois quando declaramos uma const, esta não pode alterar o valor recebido, ao contrário de uma variável let

/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?

    /*RESOLUÇÃO 8*/

    let valorMonetario = 100;
    const taxaJuros = 1.03;
    let valorFinal = valorMonetario * taxaJuros;
    console.log(valorFinal);
    103
    
    


