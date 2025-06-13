let numero;
do {

numero = prompt('digite um numero entre 1 e 10:');
}while(numero < 1 || numero > 10);

console.log(`voce digitou o numero ${numero}.`);