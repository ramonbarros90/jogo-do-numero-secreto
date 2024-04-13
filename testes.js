/* function evenOrOddNumber(number) {
     if (number > 0) {
        console.log('O número é positivo.');
     } else if(number < 0){
        console.log('O número é negativo.');
     } else{
        console.log('O número é zero.');
     }
}
evenOrOddNumber(10);
evenOrOddNumber(-10);
evenOrOddNumber(0);

 */

/* // crie uma função que calcule o quadrado de um número;
function verquadrado(pornumero){
    return pornumero * pornumero;
}
    


verquadrado(2);
verquadrado(3); */

/* // Criar uma função que exibe "Olá, Mundo!" no console;
function teSalut() {
    console.log("Olá, Mundo!");
}
let bienVenidos = teSalut();
console.log(bienVenidos);
 */

/* Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function craxa(cara) {
    console.log(`Olá, ${cara}!`);
}
craxa('ramon');
 */

/*Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function drobado(barril) {
    return barril * barril;
}

drobado(2);
*/

/* Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculeMediaDeTres(n1, n2, n3) {
    return (n1 + n2 + n3)/3;
}
calculeMediaDeTres(2, 2, 2);
*/

/*Criar uma função que recebe dois números como parâmetros e retorna o maior deles.


function qualNumeroMaior(numero1, numero2){
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else {
        return "Os números são iguais.";
    }
}

qualNumeroMaior(1, 2);
*/

/*
Criar uma função que recebe um número como parâmetro
e retorna o resultado da multiplicação desse número por ele mesmo


function drobandoObarril(oBarril){
    return oBarril * oBarril;
}

drobandoObarril(2);
*/

let listaGenerica = [];
let linguagensDeProgramacao  = ['JavaScript','C','C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby', 'GoLang');

linguagensDeProgramacao.push('Rust', 'node', 'react');
linguagensDeProgramacao.pop('Rust', 'node', 'react');
linguagensDeProgramacao.pop('rust');
linguagensDeProgramacao.pop();


console.log(linguagensDeProgramacao[0]);
console.log(linguagensDeProgramacao[1]);
console.log(linguagensDeProgramacao.length -1);