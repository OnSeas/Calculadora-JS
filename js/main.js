/* Projeto de uma calculadora feita utilizando html, css e JavaScript.
 Feiro unicamente com propositos de aprendizado.
 Por Osmar Januario de Souza Neto */

 var ValorEscrito;
 var Result;

 function botao(num){
    ValorEscrito = document.calculadora.tela.value += num; // Adiciona na string o valor do botão digitado. 
 }

 function apaga(){
    document.calculadora.tela.value = ""; // Coloca a String que aparece no input tela igual a vazio.
 }

 function calcula(){
    Result = eval(ValorEscrito); // Calcula toda a string que aparece na tela
    document.calculadora.tela.value = Result; // Imprime o resultado no input tela.
 }