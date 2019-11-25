/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/

let nome = "Marianna";
let profissao = "front-end developer";
let escolaridade = "superior incompleto";
let estado = "Rio de Janeiro";
let cidade = "Rio das Ostras";

console.log(nome, profissao, escolaridade, estado, cidade);
// Marianna front-end developer superior incompleto Rio de Janeiro Rio das Ostras

/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/

nome = "Mari";
profissao = "estudante";
escolaridade = "superior incompleto2";
estado = "Rio de Janeiro2";
cidade = "Rio das Ostras2";

console.log(nome, profissao, escolaridade, estado, cidade);
// Mari estudante superior incompleto2 Rio de Janeiro2 Rio das Ostras2

/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/

let a = 10;
let b = 20;
let aux;
aux = a;
a = b;
b = aux;

console.log(a, b);

/*  
    4. Escreva:

        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/
a = 10;
b = 20;
console.log(b);
b = 5;
console.log(a,b);

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

a = 30;
b = 20;
let c = a+b;
console.log(c);
b = 10;
c = a+b;
console.log(a,b,c);
// 50
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

a = 10;
b = 20;
c = a;
b = c;
a = b;
console.log(a,b,c);
// 10 10 10

/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/

const A = 100;
A = 80;
// não funciona, porque valores do tipo const não podem ser alteradas

/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?

    R: taxa -> constante
    VALOR MONETARIO e VALOR  -> variavel
    console.log(VALOR);

*/
