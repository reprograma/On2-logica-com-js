/* 
  Tabela Verdade ("Disponivel no slide")
 
  Condicao 1  Condicao 2   &&(E)
   true        true      true 
   true        false     false 
   false       true      false 
   false       false     false 

 Condicao 1  Condicao 2   || (OU)
   true        true      true 
   true        false     true 
   false       true      true 
   false       false     false 

    Valor  !Valor(!NÃO)
    true    false
    false   true 

*/

  let numero = 3;
  
  let condicao1 = (numero == 5); 
  console.log (condicao1) // 3 = 5 - false

  let condicao2 = numero > 3;
  console.log (condicao2) // 3 > 3 - false

  



