// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 70;
let b = 30;
let c = 50;

if (a > b && a > c) {
    console.log(a + ' é o maior número entre esses valores!')
}
else if (b > a && b > c) {
    console.log(b + ' é o maior número entre esses valores!')
}
else {
    console.log(c + ' é o maior número entre esses valores!')
}