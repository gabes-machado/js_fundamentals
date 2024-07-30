// Função de exemplo
// Esta função recebe um texto como parâmetro e imprime esse texto no console.

function printText(text) {
    console.log(text);
}

// Chamando a função printText com o texto 'hello world!'
printText('hello world!');

// Uma função é necessária para imprimir o texto invertido
// Esta função recebe um texto como parâmetro, inverte esse texto e imprime o texto invertido no console.

function printReversedText(text) {
    console.log(text.split('').reverse().join(''));
}

// Chamando a função printReversedText com o texto 'hello world!'
printReversedText('hello world!');

/* 
O que é uma função?
Em JavaScript, uma função é um bloco de código reutilizável que executa uma tarefa específica. 
As funções são um dos blocos de construção fundamentais em JavaScript.

Aqui está a sintaxe básica de uma função:
*/

function functionName(parameters) {
    // código a ser executado
  }

/*
functionName: Este é o nome da função.
parameters: Estes são os inputs para a função. Você pode adicionar quantos parâmetros quiser, basta separá-los com uma vírgula.
O código a ser executado pela função é colocado dentro de chaves {}.
Por exemplo, uma função que adiciona dois números poderia ser assim:
*/

function addNumbers(a, b) {
    return a + b;
  }

/*
Você pode chamar ou invocar a função usando seu nome seguido por 
parênteses e fornecer os parâmetros (se houver) dentro desses parênteses. Por exemplo:
*/

let sum = addNumbers(5, 10);
console.log(sum); // Saída: 15

// Expressão de função: a principal diferença é o HOISTING 
// Aqui, a função é atribuída a uma variável. A função só pode ser chamada após a declaração.

let multiplyNumbers = function(a, b) {
    return a * b;
  }

let product = multiplyNumbers(5, 10);
console.log(product); // Saída: 50

// Função de seta
// É uma maneira mais curta de escrever uma função. Aqui, a palavra-chave 'function' é substituída por '=>'.

let divideNumbers = (a, b) => {
    return a / b;
}

let quotient = divideNumbers(10, 5);
console.log(quotient); // Saída: 2
