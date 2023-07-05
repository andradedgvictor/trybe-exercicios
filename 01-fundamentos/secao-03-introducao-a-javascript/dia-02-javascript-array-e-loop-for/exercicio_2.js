// 2. Some todos os valores contidos no array e imprima o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
}

console.log('Resposta: ' + sum)