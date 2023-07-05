// 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];

for (let index = 0; index <= 25; index += 1) {
    array.push(index)
}

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] + ' dividido por 2: ' + array[index] / 2)
}