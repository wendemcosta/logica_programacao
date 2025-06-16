/*function dobrar(num) {
    valor = num * 2;
    return num;
}
var valor = 10;
console.log(dobrar(valor)); // 20 
console.log(valor);//10*/

function saudacao(nome = "visitante") {
   console.log(`olá, ${nome}!`);
} 
saudacao();//olá,visitante!
saudacao("wendem"); //olá, wendem!

