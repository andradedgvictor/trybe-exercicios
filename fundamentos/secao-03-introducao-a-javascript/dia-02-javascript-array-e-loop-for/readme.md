# Exercícios

## Considere esse array para realizar os próximos exercícios.

`let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];`

1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().

2. Some todos os valores contidos no array e imprima o resultado.

3. Calcule e imprima a média aritmética dos valores contidos no array.
    A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

4. Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

5. Utilizando for, descubra o maior valor contido no array e imprima-o.

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

7. Utilizando for, descubra o menor valor contido no array e imprima-o.

8. Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

## Considere esse array para realizar os próximos exercícios.

O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

```javascript
`O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24;`
```
10. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

11. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

```javascript
let word = 'tryber';
```

```javascript
let array = ['java', 'javascript', 'python', 'html', 'css'];
```

12. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

## Bônus

Para os próximos dois exercícios [leia este artigo](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) e tente entender o que está acontencedo no código abaixo:

```
for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];
      array[i] = array[j];
      array[j] = position;
    }
  }
}
```

1. Ordene o array numbers em ordem crescente e imprima seus valores;

2. Ordene o array numbers em ordem decrescente e imprima seus valores;

3. Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

`[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]`