/*  
   1. Crie as varias citadas abaixo, complentando com suas informações e print no console.log seu retorno. 
    
        nome, profissão, escolaridade, estado, cidade

    Dica: let IDENTIFICADOR = ATRIBUTO

*/
// Como Variáveis
let nome = 'Priscila';
let profissao = 'Estudante';
let escolaridade = 'Ensino Técnico';
let estado = 'Berlin';
let cidade = 'Berlin';

// Como Objeto
let informacoes = {
    nome : 'Priscila',
    profissao: 'Estudante',
    escolaridade : 'Ensino Técnico',
    estado : 'Berlin',
    cidade : 'Berlin'
}


/*
    2. Com as variaveis criadas, substitua os valores já definidos por valores diferentes atribuidos a elas.

        Dica: IDENTIFICADOR = ATRIBUTO

    obs: Lembrando que queremos substituir o valor atribuido, portanto, não é necessario declarar a variavel novamente.

*/
// Trocando valores das variáveis
 nome = 'Flores';
 profissao = 'Desenvolvedora Frontend';
 escolaridade = 'Tecnólogo em ADS incompleto';
 estado = 'São Paulo';
 cidade = 'Piquete';

// Trocando valores das propriedades do objeto
informacoes.nome = 'Flores';
informacoes.profissao = 'Desenvolvedora Frontend';
informacoes.escolaridade = 'Tecnólogo em ADS incompleto';
informacoes.estado = 'São Paulo';
informacoes.cidade = 'Piquete';

/*
    3. Trabalhando variavel e logica, escreva:

        Variavel A = 10
        Variavel B = 20

    Troque o valor de A para B e valor de B para A.
*/
let A = 10;
let B = 20;
let C = '';
C = A;
A = B;
B = C;

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
console.log(B)
B = 5;
console.log(A, B)


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
console.log(C)
B = 10;
C = A + B;
console.log(A, B, C)

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
console.log(A, B, C)


/*
    7. Crie uma constante A que armazene um valor de 100 e troque o valor de A para 80.

    Responda:
    Essa operação funcionou ? justifique
*/
 const A = 100;
 console.log(' A = 80.  Não funciona pois quando você declara uma variável como const ela não pode ter seu valor alterado por se tratar de uma constante');

/*
    8. Um programa recebe um VALOR MONETÁRIO, e aplica uma TAXA de juros FIXA de 3% e no final apresenta o VALOR com a taxa aplicada.
    Onde usariamos varáveis, constante e console?
*/
// O valor monetário pode ser váriavel pois é uma informação que vem do usuário, a taxa como é fixa deve ser const e o console serve para mostrar o resultado no console do navegador. Segue o algortimo
let valorMonetario = parseFloat(prompt('Digite um valor:'));
const valorFinalComTaxa = valorMonetario + ((valorMonetario*3) / 100);
console.log(valorFinalComTaxa);
