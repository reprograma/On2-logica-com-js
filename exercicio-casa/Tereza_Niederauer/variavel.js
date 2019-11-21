/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações 
   e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/
let nome = "Tereza" ; 
let profissão = "Estudande";
let escolaridade = "Superior";
let estado = "DF";
let cidade = "Brasília";

console.log( nome + profissão + escolaridade + estado + cidade);

/*Retorna : Tereza Estudande Superior DF Brasília */


/*  
    2. Com as variaveis criadas, substitua os valores já definidos por 
    valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/

nome = "Joana";
profissão = "N/A";
escolaridade = "N/A";
estado = "PR";
cidade =" não lembro";

console.log( nome + profissão + escolaridade + estado + cidade);

/* Retorna Joana N/A N/A PR não lembro */


/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/

let A = 10;
let B = 20;
let troca = ''; 

troca = A;
A = B ;
B = troca;
/*  
    4. Escreva:

        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/

let A = 10 
let B = 20
console.log( B);
B = 5
console.log( "A = " + A +" e B = "+ B)


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

let A = 30
let B = 20
let C =  A + B;

console.log("O valor de C é "+ C);

B = 10
C = B + A; 
console.log("O valor de A é " + A +" de B é "+ B + "e C é "+ C)

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
let C = '';

C = A
B = C
A = B

console.log("O valor de A é " + A +" de B é "+ B + " e C é "+ C)


/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/

const A = 100 
A = 80

/*Uncaught TypeError: Assignment to constant variable.
Uma constante não pode ter seus valores alterados*/


/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros 
    FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?
*/

let dindin = parseFloat(window.prompt("Valor do empréstimo: "));
const taxa = 0.03; /*3% */

console.log(" valor final da operação é: "+ "R$ "(dindin + dindin * taxa))

