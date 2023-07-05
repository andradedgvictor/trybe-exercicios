// 4. Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;
let media = null;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
    media = sum / numbers.length
}

if (media > 20) {
    console.log(media + ' -> Valor maior que 20')
}
else {
    console.log(media + ' -> Valor menos que 20')
}