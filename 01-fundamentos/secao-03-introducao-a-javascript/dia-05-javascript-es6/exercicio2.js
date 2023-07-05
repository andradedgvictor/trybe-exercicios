// 1. Crie uma função que ligue e desligue o motor de um carro
const engine = (status) => {
  const engineStatus = status.toLowerCase();
  console.log(engineStatus)
  let onOrOff;

  if (engineStatus === 'ligado') {
    onOrOff = 'desligado';
    return `O motor está ${onOrOff}`;
  } else if (engineStatus === 'desligado') {
    onOrOff = 'ligado';
    return `O motor está ${onOrOff}`;
  }
};

// console.log(engine('Ligado'));

// 2. Crie uma função que calcule a área de um círculo

const circleArea = (radius) => {
  const pi = 3.14;

  if(typeof radius !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }

  return `A aréa do circulo é: ${pi * (radius ** 2)}`
};

// console.log(circleArea(20));

// 3. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const biggestWord = (string) => {
  let arrayString = string.split(' ');
  let result = '';

  for (let index = 0; index < arrayString.length; index += 1) {
    if (result.length < arrayString[index].length) {
      result = arrayString[index]
    }
  }

  return result;
};

// console.log(biggestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))