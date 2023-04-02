const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const arrayFrase = frase.split(' ');
  let result = '';

  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index] === 'x') {
      result += ` ${nome} `;
    } else if (arrayFrase !== 'x') {
      result += arrayFrase[index];
    }
  }

  return result;
};

const minhasSkills = (substituaX) => {
  const skills = ['Javascript', 'CSS', 'HTML'];
  let result = `${substituaX}
Minhas três principais habilidades são:
- ${skills[0]}
- ${skills[1]}
- ${skills[2]}`

  return result;
};

console.log(minhasSkills(substituaX()));