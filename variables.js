// Diferenças entre var, let e const

/*
No JavaScript, var, let e const são usados para declarar variáveis, mas eles têm algumas diferenças:

var:
É a palavra-chave mais antiga para declarar uma variável em JavaScript.
- As declarações var têm escopo global ou escopo de função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função está disponível para uso em toda a janela. var tem escopo de função quando é declarada dentro de uma função.
- As variáveis var podem ser atualizadas e redeclaradas dentro de seu escopo.
- As variáveis var são içadas para o topo de seu escopo e inicializadas com um valor indefinido.

let:
- let é uma versão aprimorada de var e foi introduzida no ES6.
- As variáveis let têm escopo de bloco. Isso significa que só podem ser acessadas dentro do bloco em que foram declaradas.
- As variáveis let podem ser atualizadas, mas não redeclaradas.

const:
- const também tem escopo de bloco.
- As variáveis const não podem ser atualizadas nem redeclaradas. Isso significa que uma vez que uma variável const tenha sido atribuída, você não pode mudar seu valor ou redeclará-la.

Boa prática:
Em geral, os desenvolvedores são aconselhados a usar let e const em vez de var para evitar confusão e bugs. Use let quando souber que o valor de uma variável mudará, e use const quando o valor for constante e não mudará.
*/

// Exemplo: área do triângulo

var altura = 5;
var base = 10;
var area = (base * altura) / 2;

console.log(area) // Imprime a área do triângulo no console

// Conversão de tipos

// Conversão implícita

const numero = 456;
const numeroString = '456';

console.log(numero == numeroString) // true, porque '==' realiza a conversão de tipos

// Conversão explícita

console.log(Number(numeroString) === numero) // true, porque '===' não realiza a conversão de tipos

/*
Diferentes tipos de '=': '=' é atribuição, '==' é igualdade solta que realiza a coerção de tipo, ou seja, converte os operandos para um tipo comum antes da comparação. Isso pode levar a resultados inesperados devido às conversões de tipo implícitas.
'===' é igualdade estrita que não realiza a coerção de tipo, e considera operandos de tipos diferentes como diferentes.
É geralmente recomendado usar a igualdade estrita para evitar resultados inesperados devido a conversões de tipo implícitas.
*/

// Strings de modelo

const nome = 'Gabriel';
const idade = 22;
const cidade = 'Brasília';

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`) // Note o uso de crases (`) em vez de aspas simples ('') ou duplas ("")
