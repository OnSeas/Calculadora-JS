/* Projeto de uma calculadora feita utilizando html, css e JavaScript.
 Feiro unicamente com propositos de aprendizado.
 Por Osmar Januario de Souza Neto */

 var Valor;

 function botao(num){
    Valor = document.calculadora.tela.value += num;
 }

 function apaga(){
    document.calculadora.tela.value = "";
 }

 function calcula(){
    Resultado = eval(Valor);
    document.calculadora.tela.value = Resultado;
 }