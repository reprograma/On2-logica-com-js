/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/


let nome='Laine';
let profissao='Analista de SIG';
let escolaridade='Superior completo';
let estado='RJ';
let cidade='Rio de Janeiro';

 console.log(nome,profissao,escolaridade,estado,cidade)
/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/


/*  
    3. Trabalhando variavel e logica, escreva:
    
        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/


/*  
    4. Escreva:

        variavel A = 10
        variavel B = 20
        Mostre o valor de B
        variavel B = 5
        Mostre o valor de A e B
*/
let A=10;
let B=20;
console.log(B);
B=5;
console.log(A,B)


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

let A=30;
let B=20;
let C=A+B;
console.log(C);
B=10;
C=A+B;
console.log(A,B,C)
/*  
    6. Escreva:

        variavel A = 10
        variavel B = 20
        variavel C = A 
        variavel B = C
        veriavel A = B
        Mostre A,B,C
*/

let A=10;
let B=20;
C=A;
B=C;
A=B;
console.log(A,B,C)
/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.
*/
const A=100
A=80
 
// Depois que o valor da variável const é definido, ele não pode ser alterado.

    

/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?
*/
let valorMonetario=100
const taxaDeJuros=1.03
let valor=valorMonetario*taxaDeJuros
console.log(valor)
