/*  
   1. Crie as varias citadas abaixo, complentadno com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/
let nome = "Carol";
let profissao = "jornalista";
let escolaridade = "superior completo";
let estado = "minas gerais";
let cidade = "juiz de fora";

console.log(nome,profissao,escolaridade,estado,cidade);
 //Carol jornalista superior completo minas gerais juiz de fora


/*  
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO
    
    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente. 

*/
nome = "carolina";
profissão = "estudante";
escolaridade = "estudando programacao";
estado = "são paulo";
cidade = "são paulo";


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
b = C;
console.log(A,B); //20,10

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
console.log(B); / 5
B = 5;
console.log(A,B) //10,5


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
let C = A - B;
console.log(C); //50
B = 10;
c = A + B;
console.log(A,B,C); // 30,10, 40

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
console.log(A,B,C); // 10,10,10


/*  
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/
const A = 100;
A = 80; /// dá erro pois o valor é fixo e não pode ter seu valor alterado.



/*  
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada. 
    Onde usariamos varáveis, constante e console?
*/

let valor = 100;
const juros = 0.03;
let valorFinal = valor + valor * juros;
console.log(valorFinal);// 103