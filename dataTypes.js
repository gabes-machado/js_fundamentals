// Declaração de variáveis do tipo number
const num1 = 10;
const num2 = 2;

// Operações matemáticas
const add = num1 + num2; // Adição
console.log(add);

const subtract = num1 - num2; // Subtração
console.log(subtract);

const multiply = num1 * num2; // Multiplicação
console.log(multiply);

const divide = num1 / num2; // Divisão
console.log(divide);

const modulus = num1 % num2; // Módulo (resto da divisão)
console.log(modulus);

// Declaração de variáveis do tipo float
const float1 = 1.5;
const float2 = 2.5;

const resultFloat = float1 / float2; // Divisão de floats
console.log(resultFloat);

// Tentativa de operação matemática com uma string, resultando em NaN (Not a Number)
const nanValue = 'string' / 2;
console.log(nanValue);

// Declaração de variáveis do tipo string
const str1 = 'Hello';
const str2 = 'World';

const resultStr = str1 + ' ' + str2; // Concatenação de strings
console.log(resultStr);

// UTF16
const char = 'A';
console.log(char.charCodeAt(0)); // Retorna o código UTF-16 do primeiro caractere da string

// Declaração de variáveis com caracteres Unicode
const dollarSign = '\u0024' // Símbolo do dólar
const aUpper = '\u0041' // Letra 'A' maiúscula
const checkEmoji = '\u2705' // Emoji de 'check'
const hiragana = '\u3041' // Caractere 'あ' em hiragana

console.log(dollarSign)
console.log(aUpper)
console.log(checkEmoji)
console.log(hiragana)

// Comparação de strings com diferentes formatações
const city = "belo horizonte";
const input = "Belo Horizonte";

console.log(city === input); // Retorna false, pois JavaScript é case-sensitive

const city1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputLower = input1.toLowerCase(); // Converte a string para minúsculas

console.log(city1 === inputLower); // Retorna true, pois agora as strings são iguais

// Verificação do tamanho de uma string
const password = "minhaSenha123"
console.log(password.length) // Retorna 13, que é o número de caracteres na string

// Declaração de variáveis do tipo boolean
let bool1 = true;
let bool2 = false;

// Comparação de booleanos
console.log(bool1 === bool2); // Retorna false, pois os valores são diferentes

// Operadores lógicos AND e OR com booleanos
console.log(bool1 && bool2); // Retorna false (true AND false = false)
console.log(bool1 || bool2); // Retorna true (true OR false = true)

// Operador lógico NOT com booleanos
console.log(!bool1); // Retorna false (NOT true = false)
console.log(!bool2); // Retorna true (NOT false = true)
