//ex1(facil)
const none = 'João Pedro';
console.log( none); 

//ex2(facil)
var x = 10; 
var y = 20;
const resultado = x + y;
console.log(resultado);

//ex3(facil)
let idade = 16;
let maioridade = idade > 18;
console.log(maioridade);

//ex4(facil)
var a = 10;
var b = 20;
var c = 30;
const soma = a + b + c;
const media = soma / 3;
console.log(media);

//ex5(facil)
let preco = 100;
preco += preco * 0.10;
console.log(preco.toFixed(2));

//ex1(medio)
let anoNascimento = 2008;
let anoAtual = 2024;
const minhaIdade = anoAtual - anoNascimento;
console.log(minhaIdade);

//ex2(medio)
let n = 12
const parOUimpar = n % 2 ==0;
console.log(parOUimpar);

//ex3(medio)
let salario = 2500; 
if (salario > 2000) {
    salario -= salario * 0.10; 
} else {
    salario += salario * 0.05; 
}
console.log(salario);

//ex4(medio)
let r = 15; 
let pi = 5; 
let perimetro = 2 * pi * r; 
console.log(perimetro);

//ex5(medio)
let num1 = 20;
let num2 = 30;
let maior = num1 > num2 ? num1 : num2; 
console.log(maior);

//ex6(medio)
const tc = 25;
const tf = (tc * 9/5) + 32;
console.log(tf)

//ex7(medio)
let a1 = 5;
let b1 = 10;
a1 = a1 + b1;  
b1 = a1 - b1; 
a1 = a1 - b1;  
console.log(a1);
console.log(b1);

//ex1(dificil)
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
console.log(`O ${num} é divisivel por 3 e 5 ao mesmo tempo`)
} else {
    console.log(`O ${num} numero não é divisivel por 3 e 5 ao mesmo tempo`) 
}

//ex2(dificil)
let f = 5;
let fatorial = 1;

let i = 1;
while (i <= f) {
    fatorial = fatorial * i;
    i = i + 1;
}

console.log("O fatorial de " + f + " é " + fatorial + ".");

//ex3(dificil)
let a2 = 3;
let b2 = 4;
let c2 = 5;

if (a2 + b2 > c2 && a2 + c2 > b2 && b2 + c2 > a2) {
    console.log("Os números podem formar um triângulo.");
} else {
    console.log("Os números não podem formar um triângulo.");
}

//ex4(dificil)
let num3 = 15;

if (x >= 10 && x <= 20) {
    console.log(x + " está no intervalo [10, 20].");
} else {
    console.log(x + " não está no intervalo [10, 20].");
}


//ex5(dificil)
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}

//ex6(dificil)
let num6 = 10;
let num7 = 20;
let maior1 = num6 > num7 ? num6 : num7;

console.log("O maior número é " + maior + ".");


//ex7(dificil)
let num4 = 8;
let num5 = 5;
let diference = num4 - num5;
let result = diference * diference;

console.log("O quadrado da diferença entre " + num1 + " e " + num2 + " é " + resultado + ".");

//ex8(dificil)
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let somaPesos = peso1 + peso2 + peso3;
let media1 = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

console.log("A média ponderada é " + media1 + "");
